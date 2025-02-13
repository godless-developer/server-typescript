import { RequestHandler } from "express";
import { users } from "../database/user.db";

export const UpdateUser: RequestHandler = (req, res) => {
  const _id = req.params.id;
  const { name, email, password, address, role } = req.body;
  const findUser = users.find((user) => user.id === _id);
  if (findUser) {
    findUser.name = name;
    findUser.email = email;
    findUser.password = password;
    findUser.address = address;
    findUser.role = role;
    res.send("User updated successfully");
  } else {
    res.json("User not found");
    return;
  }

  //   let updatedUser = false;

  //   if (findUser && findUser.name !== name) {
  //     findUser.name = name;
  //     updatedUser = true;
  //   }

  //   if (findUser && findUser.email !== email) {
  //     findUser.email = email;
  //     updatedUser = true;
  //   }

  //   if (findUser && findUser.password !== password) {
  //     findUser.password = password;
  //     updatedUser = true;
  //   }
  //   if (findUser && findUser.address !== address) {
  //     findUser.address = address;
  //     updatedUser = true;
  //   }
  //   if (findUser && findUser.role !== role) {
  //     findUser.role = role;
  //     updatedUser = true;
  //   }
  //   if (updatedUser) {
  //     res.send("User updated successfully");
  //   } else {
  //     res.send("User not updated");
  //     return;
  //   }
};
