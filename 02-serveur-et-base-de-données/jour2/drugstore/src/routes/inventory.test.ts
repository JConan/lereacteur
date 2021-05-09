import supertest from "supertest";
import express from "express";
import InventoryRouter from "./inventory";

describe("Drugstore Inventory API", () => {
  it("should be able to test dummy api Hello", async () => {
    const app = express();
    app.use(InventoryRouter());
    supertest(app)
      .get("/hello")
      .expect(200)
      .then((response) =>
        expect(response.body).toEqual({ message: "Hi, there!" })
      );
  });
});
