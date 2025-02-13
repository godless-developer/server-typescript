import { RequestHandler } from "express";
import { users } from "../database/user.db";

export const RegisterUser: RequestHandler = (req, res) => {
  const { name, email, password, address, role } = req.body;

  const findUserName = users.find((user) => user.name === name);
  if (findUserName) {
    res.send("Name already exists");
    return;
  }

  const findUserEmail = users.find((user) => user.email === email);
  if (findUserEmail) {
    res.send("Email already exists");
    return;
  }

  const lastUser = users[users.length - 1];
  const newUserId = lastUser ? Number(lastUser.id) + 1 : 1;

  const newUser = {
    id: newUserId.toString(),
    name,
    email,
    password,
    role,
    createdAt: new Date(),
    updatedAt: new Date(),
    address,
  };
  users.push(newUser);
  res.send("User registered successfully");
  return;
};

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
