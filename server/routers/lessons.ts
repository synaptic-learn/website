import { Router } from "express";

import aws_ddb_config from "../configs/aws/ddb";
import ddb from "../connections/aws/ddb";
import { catchNext } from "../helpers";

const lessons_router = Router();

lessons_router.get(
  "/",
  catchNext(async function (_, res) {
    const result = await ddb.scan({ TableName: aws_ddb_config.table }).promise();
    res.send(result.Items);
  })
);

export default lessons_router;
