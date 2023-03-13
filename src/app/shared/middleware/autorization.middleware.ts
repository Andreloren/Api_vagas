import { NextFunction, Request, Response } from "express";

import "dotenv/config";
import * as jwt from "jsonwebtoken";

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

  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET!);
    req.user = decoded;
  } catch (error) {
    return HttpHelper.unauthorized(res, "Token é inválido");
  }
  next();
}
