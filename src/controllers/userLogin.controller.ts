import { RequestHandler } from "express";
import { users } from "../database/user.db";

export const LoginUser: RequestHandler = (req, res) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);
  if (!user) {
    res.send("Invalid email");
    return;
  }
  if (user.password !== password) {
    res.send("Invalid password");
    return;
  }

  res.send(`Login successfully ${user.id}`);
};
