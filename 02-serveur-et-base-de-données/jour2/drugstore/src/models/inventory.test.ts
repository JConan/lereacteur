import mongoose, { Connection } from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import createDrugModel, { IDrug } from "./inventory";

describe("Drugstore Inventory MODELs for persisting storage", () => {
  const mongoServer = new MongoMemoryServer({ autoStart: true });
  let connection: Connection;

  beforeAll(async () => {
    connection = await mongoose.createConnection(await mongoServer.getUri(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    createDrugModel(connection).insertMany([
      {
        name: "DOLIPRANE",
        quantity: 20,
      },
    ]);
  });

  afterAll(async () => {
    await connection.close();
    await mongoServer.stop();
  });

  it("should be connected", async () => {
    expect(connection.readyState).toEqual(mongoose.STATES.connected);
  });

  it("should be able to create a drug in database", async () => {
    const DrugModel = createDrugModel(connection);
    const data: IDrug = {
      name: "ASPEGIC",
      quantity: 10,
    };
    const drug = await new DrugModel(data).save();
    expect(drug).toHaveProperty("_id");
  });

  it("should be able to retrieve a drug from database", async () => {
    const DrugModel = createDrugModel(connection);
    expect(await DrugModel.countDocuments()).not.toBe(0);
    expect(await DrugModel.findOne({ name: "DOLIPRANE" })).toHaveProperty(
      "quantity",
      20
    );
  });
});
