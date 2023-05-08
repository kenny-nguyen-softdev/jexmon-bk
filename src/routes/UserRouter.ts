import express from "express";
const router = express.Router();
import UserController from '../app/controllers/UserController';
class UserRouter {
  public router;
  protected userController;

  constructor() {
    this.router = router;
    this.userController = new UserController();
    this.intializeRoutes();
  }

  public intializeRoutes(): void {
    this.router
      .route("/sign-up")
      .post(this.userController.signUp);
    this.router
      .route("/sign-in")
      .post(this.userController.signIn);
  }
}

export default new UserRouter().router;
