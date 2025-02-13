import express from "express";
import bodyParser from "body-parser";
import { userRouter } from "./routes/user.route";
import { users } from "./database/user.db";
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
