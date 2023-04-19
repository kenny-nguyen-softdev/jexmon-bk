import Joi from "joi";
import { Request, Response, NextFunction } from "express";

interface UserRequest extends Request {
  value?: { body?: string };
}
export class UserValidator {
  constructor() {}

  validateBody(schema: any) {
    return async (req: UserRequest, res: Response, next: NextFunction) => {
      try {
        const val = await schema.validateAsync(req.body);
        req.value = req.value ?? {};
        req.value.body = req.value.body ?? val;
        next();
      } catch (error) {
        res.status(400).json(error);
      }
    };
  }
}

export const lessonSchema = Joi.object().keys({
  courseId: Joi.number().integer().required(),
  url: Joi.string().trim().uri().required(),
  description: Joi.string().trim(),
  thumbnailUrl: Joi.string().uri(),
  title: Joi.string().trim().required(),
  duration: Joi.string(),
  seqNo: Joi.number(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
});
