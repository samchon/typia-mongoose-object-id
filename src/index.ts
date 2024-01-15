import { ObjectId } from "mongoose";
import { metadata } from "typia/lib/reflect";
import fs from "fs";

fs.writeFileSync(
  __dirname + "/../ObjectId.json",
  JSON.stringify(
    metadata<[ObjectId]>(),
    null,
    2,
  ),
  'utf8',
);