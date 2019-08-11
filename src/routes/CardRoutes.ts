import { cardController } from "../controller/CardController"
import { Router } from "express";

let cardControllerObj = new cardController();
export const cardRoutes: Router = Router();
console.log("card routes");
cardRoutes.post('/createCard', cardControllerObj.createCard);
cardRoutes.put('/updateCardById', cardControllerObj.updateCardById);
cardRoutes.get('/getCardById', cardControllerObj.getCardById);
cardRoutes.get('/getAllCards', cardControllerObj.getAll);
