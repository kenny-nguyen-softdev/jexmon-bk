import { Application } from "express";
import UserRouter from "./UserRouter";
import CategoryRouter from "./CategoryRouter";
import BrandRouter from "./BrandRouter";
export default class Routes {
  constructor(app: Application) {
    app.use("/api/user", UserRouter);
    app.use("/api/category", CategoryRouter);
    app.use("/api/brand", BrandRouter);
  }
}
