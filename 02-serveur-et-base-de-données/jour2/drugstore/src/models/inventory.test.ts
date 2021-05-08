import mongoose, { Connection } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

describe("Drugstore Inventory MODELs for persisting storage", () => {
  const mongoServer = new MongoMemoryServer();
  let mongooseConnection: Connection;

  beforeAll(async () => {
    mongooseConnection = await mongoose.createConnection(
      await mongoServer.getUri(),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  });

  afterAll(async () => {
    await mongooseConnection.close();
    await mongoServer.stop();
  });

  it("should be connected", async () => {
    expect(mongooseConnection.readyState).toEqual(mongoose.STATES.connected);
  });
});
