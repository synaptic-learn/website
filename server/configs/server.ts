import getEnvVar from "./getEnvVar";

const server_config = {
  hostname: getEnvVar("HOSTNAME"),
  port: +getEnvVar("PORT")
};

export default server_config;
