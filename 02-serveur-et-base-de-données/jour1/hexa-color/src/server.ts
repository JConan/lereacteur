import express from "express";
import colorRoute from "./routes/color";

const app = express();

app.use(colorRoute);

app.listen(3000, () => {
  console.log("server listen ... port 3000");
});
