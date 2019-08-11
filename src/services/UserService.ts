import express from "express";
import { userModel } from "../model/userModel"
import bcrypt from "bcrypt";
import * as jwt from 'jsonwebtoken';

export class userService {
  public static async registerUser(req: express.Request, res: express.Response) {
    try {
      let encryptedPassword = await bcrypt.hash(req.body.password, 12);
      req.body.password = encryptedPassword;
      let newUser = new userModel(req.body);
      await newUser.save();
      return newUser;
    } catch (err) {
      console.log(err);
      return err;
    }
  }


  public static async login(req: express.Request, res: express.Response) {
    try {
      let userItem: any = await userModel.findOne({ email: req.body.email }).exec();
      if (userItem) {
        let passwordMatch = await bcrypt.compare(req.body.password, userItem.password);
        if (passwordMatch) {
          let options: jwt.SignOptions = { expiresIn: "2h" };
          let payload = { "email": userItem.email, "name": userItem.name };
          let token = await jwt.sign(payload, "secret", options);
          console.log("Token generated is " + token);
          return { "token": token };
        } else {
          return "Password Incorrect";
        }
      } else {
        return "User not registered by Email";
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  }

}
