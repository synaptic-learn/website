import { config } from "aws-sdk";

import aws_config from "./index";

config.update({ region: aws_config.region });
