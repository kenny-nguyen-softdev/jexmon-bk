import { Router } from "express";
import CategoryController from "../app/controllers/CategoryController";

class CategoryRouter {
  router = Router();
  protected categoryController = new CategoryController();
  constructor() {
    this.intializeRoutes();
  }
  intializeRoutes() {
    this.router.route("/").get(this.categoryController.getAllList);
  }
}

export default new CategoryRouter().router;
