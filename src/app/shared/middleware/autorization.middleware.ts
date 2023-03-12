import { NextFunction, Request, Response } from "express";
import { HttpHelper } from "../util/http.helper";

export function authorizationMiddleware(
  req: any,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return HttpHelper.unauthorized(res, "Token não informado");
  }
}
