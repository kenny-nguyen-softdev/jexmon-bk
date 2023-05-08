import { Router } from "express";
import UserController from '../app/controllers/UserController';
import timeout from "connect-timeout";

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
      .route("/sign-up")
      .post(timeout("5s"), haltOnTimedout, this.userController.signUp);
    this.router
      .route("/sign-in")
      .post(timeout("5s"), haltOnTimedout, this.userController.signIn);
  }
}
function haltOnTimedout(req, res, next) {
  if (!req.timedout) next();
}

export default new UserRouter().router;
