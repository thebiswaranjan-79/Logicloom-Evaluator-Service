// We are using ZOD to validate the  data

// client => valifation middleware impl. by  zod => controller

import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const validateCreateSubmissionDto =
  (schema: ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      console.error(error);
      return res.status(400).json({
        success: false,
        message: "Invalid Request Params Exist",
        data: {},
        error: error,
      });
    }
  };
