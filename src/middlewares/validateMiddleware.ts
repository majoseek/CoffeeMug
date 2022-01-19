import { NextFunction, Request, Response } from "express";
import { isProduct } from "../services/utils";
export const validate_middleware = (
      req: Request,
      res: Response,
      next: NextFunction
) => {
      if (req.body == undefined || !isProduct(req.body)) {
            res.status(400).send("Wrong input body");
            next();
      }
      else {
            const product_name = req.body.name;
            if (product_name.length > 100) {
                  res.status(400).send("Product name cant exceed 100 characters")
                  next()
            }
            else
                  next();
      }
}
