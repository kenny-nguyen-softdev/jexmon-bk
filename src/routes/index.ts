import { Application } from "express";
import UserRouter from "./UserRouter";
import CategoryRouter from "./CategoryRouter";
import BrandRouter from "./BrandRouter";
export default class Routes {
  constructor(app: Application) {
    app.get("/api/user", (req, res) => {
      res.json("/api/user");
    });
    app.use("/api/category", CategoryRouter);
    app.use("/api/brand", BrandRouter);
  }
}
