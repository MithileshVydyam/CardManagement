import { userController } from "../controller/userController"
import { Router } from "express";

let userControllerObj = new userController();
export const userRoutes: Router = Router();
console.log("routes user");
userRoutes.post('/register', userControllerObj.registerUser);
userRoutes.post('/login', userControllerObj.login);

