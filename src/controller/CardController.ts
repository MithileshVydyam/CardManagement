import express from "express";
import { cardService } from "../services/CardService";

export class cardController {

  constructor() { }
  public async createCard(req: express.Request, res: express.Response) {
    let result = await cardService.createCard(req, res);
    res.json(result);
  }
  public async getAll(req: express.Request, res: express.Response) {
    let result = await cardService.getAll(req, res);
    res.json(result);
  }
  public async getCardById(req: express.Request, res: express.Response) {
    let result = await cardService.getCardById(req, res);
    res.json(result);
  }
  public async updateCardById(req: express.Request, res: express.Response) {
    let result = await cardService.updateCardById(req, res);
    res.json(result);
  }

}