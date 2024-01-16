import { ObjectId } from "mongoose";
import { metadata } from "typia/lib/reflect";
import fs from "fs";
import typia from "typia";

const app = metadata<[ObjectId]>();

fs.writeFileSync(
  __dirname + "/../ObjectId.list.md",
  app
    .components
    .objects
    .map(o => `- \`${o.name}\``).join("\n"),
  "utf8"
);

try {
  fs.writeFileSync(
    __dirname + "/../ObjectId.json",
    JSON.stringify(app, null, 2),
    'utf8',
  );
} catch {}

typia.createIs<ObjectId>();