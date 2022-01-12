import { NextFunction, Request, Response } from "express";

export const content_type_middleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    res.header("Content-Type", "application/json");
    next();
};
