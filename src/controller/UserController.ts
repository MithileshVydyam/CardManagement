import express from "express";
import { userService } from "../services/UserService"

export class userController {

  constructor() { }
  public async registerUser(req: express.Request, res: express.Response) {
    console.log("registerUser");
    let result = await userService.registerUser(req, res);
    res.json(result);
  }

  public async login(req: express.Request, res: express.Response) {
    let result = await userService.login(req, res);
    res.json(result);
  }

}