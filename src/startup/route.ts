import express, { response } from "express";
import { cardRoutes } from "../routes/cardRoutes";
import { userRoutes } from "../routes/UserRoutes";
import { AuthenticateService } from "../middleware/authenticate";
import { bankRoutes } from "../routes/BankRoutes";

export class Routes {
  constructor() {
  }
  public static configRoutes(app: express.Application): void {
    app.get('/', (req: express.Request, res: express.Response) => {
      res.status(200).json({ "Success": "Server is running" })
    });
    app.use('/api/user', userRoutes);
    app.use('/api/bank', bankRoutes);
    app.use(AuthenticateService.authenticate);
    app.use('/api/card', cardRoutes);
  }

}