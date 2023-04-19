import { Application } from "express";
import UserRouter from "./UserRouter";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/user", UserRouter);
  }
}
