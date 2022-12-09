import { mqtt } from "aws-iot-device-sdk-v2";
import Express, { ErrorRequestHandler, static as serve, urlencoded } from "express";
import { createServer } from "https";
import { Server } from "socket.io";

import NextError from "../NextError";
import aws_iot_config from "../configs/aws/iot";
import server_config from "../configs/server";
import api_router from "../routers/api";

import mqtt_connection from "./aws/mqtt";

const express = Express();

express
  // .use((req, _, next) => {
  //   console.log(req);
  //   next();
  // })
  .use(serve("build"))
  .use(urlencoded({ extended: true }));

express.use("/api", api_router);

// NextError Handling
const nextErrorMiddleware: ErrorRequestHandler = (err, _, res, next) => {
  console.error(err);
  if (err instanceof NextError) {
    const { status_code, message } = err;
    return res.status(status_code).send(message);
  }
  if (err instanceof Error) return res.status(500).send(err.name);
  next(err);
};
express.use(nextErrorMiddleware);

const server = createServer({ cert: server_config.cert, key: server_config.key }, express);

const io = new Server(server);

(async function () {
  const existing = await mqtt_connection.connect();
  console.info(`MQTT using existing session: ${existing}`);

  await mqtt_connection.subscribe(aws_iot_config.topic, mqtt.QoS.AtLeastOnce, async (_, event) => {
    const parsed_event = JSON.parse(Buffer.from(event).toString());
    io.emit("message", parsed_event.message);
  });
})();

export default server;
