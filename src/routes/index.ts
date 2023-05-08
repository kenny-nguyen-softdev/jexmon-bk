import { Application } from "express";
import UserRouter from "./UserRouter";
import CategoryRouter from "./CategoryRouter";
import BrandRouter from "./BrandRouter";
import timeout from "connect-timeout";

export default class Routes {
  constructor(app: Application) {
    app.use("/api/user", timeout("5s"), haltOnTimedout, UserRouter);
    app.use("/api/category", CategoryRouter);
    app.use("/api/brand", BrandRouter);
  }
}

function haltOnTimedout(req, res, next) {
  if (!req.timedout) next();
}
