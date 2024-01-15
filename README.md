# `mongoose.ObjectId` Type Demonstration
There had been repeated reports to `typia` that `typia` creates too long validation code for a `mongoose.ObjectId` type. I think users of `typia` just had expected that `mongoose.ObjectId` is just a `string` like type.

By the way, looking type definition of the `mongoose.ObjectId`, it is actually extremely complicated. This is a demonstration repo that how `mongoose.ObjectId` is extremely complicataed, so that recommends `typia` users not to validate the `moongoose` ODM schema instance.

```typescript
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
```

- Metadata Schema: [ObjectId.json](./ObjectId.json)
- Type Checker: [ObjectId.check.js](./ObjectId.check.js)