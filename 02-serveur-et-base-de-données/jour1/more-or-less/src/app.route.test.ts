import supertest from "supertest";
import express from "express";
import appRoute from "./app.route"

describe("API - Guess random number from 0 to 100", () => {
  it("should respond : less", async () => {
    const app = express();
    app.use(appRoute)
    const appTest = supertest(app);

    await appTest
      .get("/?num=12")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ result: "C'est moins !" });
      });
  });
});
