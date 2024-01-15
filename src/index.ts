import { ObjectId } from "mongoose";
import { metadata } from "typia/lib/reflect";
import fs from "fs";
import typia from "typia";

fs.writeFileSync(
  __dirname + "/../ObjectId.json",
  JSON.stringify(
    metadata<[ObjectId]>(),
    null,
    2,
  ),
  'utf8',
);

typia.createIs<ObjectId>();