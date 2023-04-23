import { Request, Response, NextFunction } from "express";
import BaseResponse from "../../core/response/BaseResponse";
import logger from "../../core/logger/logger";
import BrandService from "../services/BrandService";

export default class BrandController {
  constructor() {}

  async getAllList(req: Request, res: Response, next: NextFunction) {
    try {
      const brands = await BrandService.fetchAll();
      const response = new BaseResponse(brands);
      response.setHeader("Content-Type", "application/json");
      response.setStatus(200);
      res.status(200).json(response.build());
    } catch (error) {
      logger.error(error);
      const response = new BaseResponse(error);
      response.setHeader("Content-Type", "application/json");
      response.setStatus(500);
      res.status(500).json(response.build());
    }
  }
}
