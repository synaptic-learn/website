import { iot, mqtt } from "aws-iot-device-sdk-v2";
import { randomUUID } from "crypto";

import aws_config from "../../configs/aws/index";
import aws_iot_config from "../../configs/aws/iot";

const config = iot.AwsIotMqttConnectionConfigBuilder.new_websocket_builder()
  .with_client_id(randomUUID())
  .with_credentials(aws_config.region, aws_config.access_key, aws_config.secret_key)
  .with_endpoint(aws_iot_config.endpoint)
  .build();

const client = new mqtt.MqttClient();

const mqtt_connection = client.new_connection(config);

export default mqtt_connection;
