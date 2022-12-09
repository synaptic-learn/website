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

lessons_router.get(
  "/:id",
  catchNext(async function (req, res) {
    const result = await ddb
      .getItem({ Key: { id: { S: req.params["id"] } }, TableName: aws_ddb_config.table })
      .promise();
    res.send(result.Item);
  })
);

export default lessons_router;
