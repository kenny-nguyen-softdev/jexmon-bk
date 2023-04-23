import { Router } from "express";
import BrandController from "../app/controllers/BrandController";

class BrandRouter {
  router = Router();
  protected brandController = new BrandController();
  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route("/").get(this.brandController.getAllList);
  }
}

export default new BrandRouter().router;
