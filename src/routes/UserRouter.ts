import { Router } from "express";
import UserController from '../app/controllers/UserController';
class UserRouter {
  public router;
  protected userController;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.intializeRoutes();
  }

  public intializeRoutes(): void {
    this.router
      .post("/sign-up", this.userController.signUp);
    this.router
      .post("/sign-in", this.userController.signIn);
  }
}

export default new UserRouter().router;
