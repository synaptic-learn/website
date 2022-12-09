import Express, { ErrorRequestHandler, static as serve, urlencoded } from "express";
import { createServer } from "https";

import NextError from "../NextError";
import server_config from "../configs/server";
import api_router from "../routers/api";

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

export default server;
