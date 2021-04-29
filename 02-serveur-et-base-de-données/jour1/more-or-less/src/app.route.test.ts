import supertest from "supertest";
import express from "express";
import GuessNumber from "./app.route";

describe("API - Guess random number from 0 to 100", () => {
  it("should respond : less", async () => {
    await createGuessNumberApp()
      .get("/?num=12")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ result: "C'est moins !" });
      });
  });

  it("should respond: more", async () => {
    await createGuessNumberApp(15)
      .get("/?num=12")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ result: "C'est plus !" });
      });
  });

  it("should respond: winner", async () => {
    await createGuessNumberApp(12)
      .get("/?num=12")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ result: "C'est gagné !" });
      });
  });

  it("should check for invalid input : not a number", async () => {
    await createGuessNumberApp()
      .get("/?num=a")
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({ message: "no number was sent" });
      });
  });

  it("should check for invalid input : outbound number", async () => {
    await createGuessNumberApp()
      .get("/?num=101")
      .expect(400)
      .then((response) => {
        expect(response.body).toEqual({
          message: "the number must be between 0 and 100.",
        });
      });
  });
});

function createGuessNumberApp(number: number = 0) {
  return supertest(express().use(GuessNumber(number)));
}
