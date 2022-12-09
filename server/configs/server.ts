import { readFileSync } from "fs";
import { resolve } from "path";

import getEnvVar from "./getEnvVar";

const key = readFileSync(resolve("certs/selfsigned.key"));
const cert = readFileSync(resolve("certs/selfsigned.crt"));

const server_config = {
  cert,
  key,
  hostname: getEnvVar("HOSTNAME"),
  port: +getEnvVar("PORT")
};

export default server_config;
