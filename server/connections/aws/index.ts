import { config } from "aws-sdk";

import aws_config from "../../configs/aws";

config.update({ region: aws_config.region });
