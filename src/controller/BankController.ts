import express from "express";
import { bankService } from "../services/BankService";

export class bankController {

  constructor() { }
  public async createBank(req: express.Request, res: express.Response) {
    let result = await bankService.createBank(req, res);
    res.json(result);
  }
  public async getAllBanks(req: express.Request, res: express.Response) {
    let result = await bankService.getAllBanks(req, res);
    res.json(result);
  }
  public async getBankByName(req: express.Request, res: express.Response) {
    let result = await bankService.getBankByName(req, res);
    res.json(result);
  }
  public async updateBankById(req: express.Request, res: express.Response) {
    let result = await bankService.updateBankByName(req, res);
    res.json(result);
  }

}