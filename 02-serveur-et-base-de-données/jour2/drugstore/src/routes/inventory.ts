import { Router } from "express";

export default () => {
  const router = Router();
  router.get("/hello", (request, response) => {
    response.status(200).json({ message: "Hi, there!" });
  });
  return router;
};
