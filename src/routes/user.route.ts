import { Router } from "express";
import { RegisterUser } from "../controllers/userRegister.controller";
import { LoginUser } from "../controllers/userLogin.controller";
import { getProfile, getProfiles } from "../controllers/userProfile.controller";
import { UpdateUser } from "../controllers/userUpdate.controller";

const userRouter = Router();

userRouter
  .post("/register", RegisterUser)
  .post("/login", LoginUser)
  .get("/profile", getProfile)
  .get("/profiles", getProfiles)
  .put("/profile/update/:_id", UpdateUser);

export { userRouter };
