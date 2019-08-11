"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardController_1 = require("../controller/CardController");
var express_1 = require("express");
var cardControllerObj = new CardController_1.cardController();
exports.cardRoutes = express_1.Router();
console.log("card routes");
exports.cardRoutes.post('/createCard', cardControllerObj.createCard);
exports.cardRoutes.put('/updateCardById', cardControllerObj.updateCardById);
exports.cardRoutes.get('/getCardById', cardControllerObj.getCardById);
exports.cardRoutes.get('/getAll', cardControllerObj.getAll);
