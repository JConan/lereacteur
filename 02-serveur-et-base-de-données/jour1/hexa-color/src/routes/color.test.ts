import supertest from "supertest";
import express from "express";
import colorRoute from "./color";

describe("Color API", () => {
  const app = express();
  app.use(colorRoute);

  const appTest = supertest(app);

  it("should provide yellow color code in hexa", async () => {
    const result = await appTest.get("/?color=yellow").expect(200)
    .then(response => expect(response.body).toEqual({
        "color": "yellow",
        "hexa": "#ffff00"
    }));
  });

  it("should return error for invalid color", async() => {
    const result = await appTest.get("/?color=jone").expect(200)
    .then(response => expect(response.body).toEqual({
        "message": "color not found"
     }));
  })

});
