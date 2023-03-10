import { NextFunction, Request, Response } from "express";
import { HttpHelper } from "../util/http.helper";

export const CreateUsersMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { nome, username, senha } = req.body;

  if (!nome) {
    return HttpHelper.badRequest(res, "Nome não informado", 400);
  }

  if (!username) {
    return HttpHelper.badRequest(res, "Username não informado", 400);
  }

  if (!senha) {
    return HttpHelper.badRequest(res, "Senha não informada", 400);
  }

  next();
};
