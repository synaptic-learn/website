import getEnvVar from "../getEnvVar";

const aws_iot_config = {
  endpoint: getEnvVar("AWS_IOT_ENDPOINT"),
  topic: getEnvVar("AWS_IOT_TOPIC")
};

export default aws_iot_config;
