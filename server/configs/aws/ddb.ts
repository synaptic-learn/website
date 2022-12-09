import getEnvVar from "../getEnvVar";

const aws_ddb_config = {
  table: getEnvVar("AWS_DDB_TABLE")
};

export default aws_ddb_config;
