import { Router, Request, Response } from "express";

const router = Router();

let _numberToGuess = 0;

interface GuessNumberRequest extends Request {
  query: {
    num: string;
  };
}

router.get("/", (request: { query: { num: string } }, response: Response) => {
  const userInput: number = Number(request.query.num);

  if (isNaN(userInput)) {
    response.status(400).send({ message: "no number was sent" });
    return;
  }

  if (userInput >= 0 && userInput <= 100) {
    if (userInput > _numberToGuess) {
      response.send({ result: "C'est moins !" });
    }
    if (userInput === _numberToGuess) {
      response.send({ result: "C'est gagné !" });
    } else {
      response.send({ result: "C'est plus !" });
    }
  } else {
    response
      .status(400)
      .send({ message: "the number must be between 0 and 100." });
  }
});

export default (numberToGuess: number) => {
  _numberToGuess = numberToGuess;
  return router;
};
