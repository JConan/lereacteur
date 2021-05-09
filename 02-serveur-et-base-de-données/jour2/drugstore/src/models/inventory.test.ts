import mongoose, { Connection } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import drugModelBuilder from "./inventory"

describe("Drugstore Inventory MODELs for persisting storage", () => {
  const mongoServer = new MongoMemoryServer();
  let connection: Connection;

  beforeAll(async () => {
    connection = await mongoose.createConnection(
      await mongoServer.getUri(),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  });

  afterAll(async () => {
    await connection.close();
    await mongoServer.stop();
  });

  it("should be connected", async () => {
    expect(connection.readyState).toEqual(mongoose.STATES.connected);
  });

  it("should be able to create a drug in database", async () => {
    const DrugModel = drugModelBuilder(connection)
    const drug = await new DrugModel({ name: "ASPEGIC", quantity: 10}).save()
    expect(drug).toHaveProperty("_id")
    expect(await DrugModel.countDocuments()).not.toBe(0)
    expect(await DrugModel.findOne({name: "ASPEGIC"})).toHaveProperty("quantity", 10)
  })


});
