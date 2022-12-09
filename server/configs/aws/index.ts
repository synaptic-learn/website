import getEnvVar from "../getEnvVar";

const aws_config = {
  access_key: getEnvVar("AWS_ACCESS_KEY_ID"),
  region: getEnvVar("AWS_REGION"),
  secret_key: getEnvVar("AWS_SECRET_ACCESS_KEY")
};

export default aws_config;
