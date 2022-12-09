import getEnvVar from "../getEnvVar";

const aws_config = {
  region: getEnvVar("AWS_REGION")
};

export default aws_config;
