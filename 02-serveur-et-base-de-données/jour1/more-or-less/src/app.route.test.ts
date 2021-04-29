import supertest from "supertest";
import express from "express";
import GuessNumber from "./app.route"

describe("API - Guess random number from 0 to 100", () => {
  
  it("should respond : less", async () => {
    await createGuessNumberApp()
      .get("/?num=12")
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual({ result: "C'est moins !" });
      });
  });

  it("should respond: more", async() => {
    await createGuessNumberApp(15)
      .get("/?num=12")
      .expect(200)
      .then(response => {
          expect(response.body).toEqual({ result: "C'est plus !" })
      })
})
it("should respond: winner", async() => {
    await createGuessNumberApp(12)
      .get("/?num=12")
      .expect(200)
      .then(response => {
          expect(response.body).toEqual({ result: "C'est gagné !" })
      })
})


});


function createGuessNumberApp(number: number = 0) {
    return supertest(express().use(GuessNumber(number)));
}