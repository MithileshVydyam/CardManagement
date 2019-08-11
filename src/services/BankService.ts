import express from "express";
import { bankModel } from "../model/BankModel";

export class bankService {
  public static async createBank(req: express.Request, res: express.Response) {
    try {
      let newBank = new bankModel(req.body);
      await newBank.save();
      return newBank;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  public static async updateBankByName(req: express.Request, res: express.Response) {
    try {
      let bankItem: any = await bankModel.find({ "name": req.query.name }).exec();
      bankItem.type = req.body.type;
      await bankItem.save();
      console.log(bankItem);
      return bankItem;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public static async getBankByName(req: express.Request, res: express.Response) {
    try {
      let bankItem = await bankModel.find({ "name": req.query.name }).exec();
      return bankItem;
    } catch (err) {
      console.log(err);
      return err;
    }
  }


  public static async getAllBanks(req: express.Request, res: express.Response) {
    try {
      let allBanks = await bankModel.find().exec();
      return allBanks;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
