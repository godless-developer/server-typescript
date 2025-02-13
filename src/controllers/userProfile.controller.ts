import { RequestHandler } from "express";
import { users } from "../database/user.db";

export const getProfile: RequestHandler = (req, res) => {
  const { id } = req.body;
  const user = users.find((user) => user.id === id);
  if (user) {
    res.send(user);
  } else {
    res.send("User not found");
  }
};
export const getProfiles: RequestHandler = (req, res) => {
  res.send(users);
};
