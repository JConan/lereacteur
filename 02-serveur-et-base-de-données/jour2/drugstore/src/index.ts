import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

(async () => {
  console.log("start");

  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = await mongoServer.getUri();
  await mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await mongoose.disconnect();
  await mongoServer.stop();

  console.log("end");
})();

console.log("hello world");

export default {};
