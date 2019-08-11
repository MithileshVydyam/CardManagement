import express from "express";
import { cardModel } from "../model/CardModel";

export class cardService {
  public static async createCard(req: express.Request, res: express.Response) {
    try {
      let newCard = new cardModel(req.body);
      await newCard.save();
      return newCard;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  public static async updateCardById(req: express.Request, res: express.Response) {
    try {
      let cardItem: any = await cardModel.findById(req.query.id).exec();
      cardItem.type = req.body.type;
      await cardItem.save();
      console.log(cardItem);
      return cardItem;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  public static async getCardById(req: express.Request, res: express.Response) {
    try {
      let cardItem = await cardModel.findById(req.query.id).exec();
      return cardItem;
    } catch (err) {
      console.log(err);
      return err;
    }
  }


  public static async getAll(req: express.Request, res: express.Response) {
    try {
      let allCards = await cardModel.find().exec();
      return allCards;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}
