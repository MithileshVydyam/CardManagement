import { bankController } from "../controller/BankController"
import { Router } from "express";

let bankControllerObj = new bankController();
export const bankRoutes: Router = Router();
bankRoutes.post('/createBank', bankControllerObj.createBank);
bankRoutes.put('/updateBankByName', bankControllerObj.updateBankById);
bankRoutes.get('/getBankByName', bankControllerObj.getBankByName);
bankRoutes.get('/getAllBanks', bankControllerObj.getAllBanks);
