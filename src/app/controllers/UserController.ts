import { Request, Response, NextFunction } from "express";
import logger from "../../core/logger/logger";
import BaseResponse from "../../core/response/BaseResponse";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import UserService from "../services/UserService";
function savePost(post, cb) {
  setTimeout(function () {
    cb(null, (Math.random() * 40000) >>> 0);
  }, (Math.random() * 7000) >>> 0);
}
export default class UserController {
  constructor() {}

  async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      savePost(req.body, function (err, id) {
        if (err) return next(err);
        res.send("saved as id " + id);
      });

      const newUser = await UserService.createNewUser(req.body);

      if (newUser) {
        const access_token = jwt.sign(
          {
            email: newUser.email,
            username: newUser.username,
          },
          "jexmon-bk-secret-key",
          { expiresIn: 60 * 60 * 24 }
        );

        const response = new BaseResponse({
          message: "Đăng nhập thành công !",
          access_token,
          name: newUser.first_name + " " + newUser.last_name,
        });
        response.setHeader("Content-Type", "application/json");
        response.setStatus(201);
        res.status(201).json(response.build());
      } else {
        const response = new BaseResponse({
          message: "Đăng ký User không thành công !!!",
        });
        response.setHeader("Content-Type", "application/json");
        response.setStatus(500);
        res.status(500).json(response.build());
        return;
      }
    } catch (error) {
      logger.error(error);
      const response = new BaseResponse(error);
      response.setHeader("Content-Type", "application/json");
      response.setStatus(500);
      res.status(500).json(response.build());
    }
  }

  async signIn(req: Request, res: Response, next: NextFunction) {
   savePost(req.body, function (err, id) {
     if (err) return next(err);
     res.send("saved as id " + id);
   });

    try {
      const { email, password } = req.body;
      const user = await UserService.getUserByEmail(email);

      if (user) {
        // b2: Kiểm tra mật khẩu có đúng hay không ?
        const isAuth = bcrypt.compareSync(password, user.password);

        if (isAuth) {
          const access_token = jwt.sign(
            {
              email: user.email,
              username: user.username,
            },
            "jexmon-bk-secret-key",
            { expiresIn: 60 * 60 * 24 }
          );

          const response = new BaseResponse({
            message: "Đăng nhập thành công !",
            access_token,
            name: user.first_name + " " + user.last_name,
            id: user.id,
          });
          response.setHeader("Content-Type", "application/json");
          response.setStatus(200);
          res.status(200).json(response.build());
        } else {
          const response = new BaseResponse({
            message: "Tài khoản hoặc mật khẩu không đúng !!!",
          });
          response.setHeader("Content-Type", "application/json");
          response.setStatus(500);
          res.status(500).json(response.build());
        }
      } else {
        const response = new BaseResponse({
          message: "Không tìm thấy email phù hợp !!!",
        });
        response.setHeader("Content-Type", "application/json");
        response.setStatus(404);
        res.status(404).json(response.build());
        return;
      }
    } catch (error) {
      logger.error(error);
      const response = new BaseResponse(error);
      response.setHeader("Content-Type", "application/json");
      response.setStatus(500);
      res.status(500).json(response.build());
    }
  }
}
