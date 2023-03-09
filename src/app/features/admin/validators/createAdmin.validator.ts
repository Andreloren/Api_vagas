import { NextFunction, Request, Response } from "express";
import { HttpHelper } from "../../../shared/util/http.helper";

export const CreateAdminValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { nome, username, senha } = req.body;

  if (!nome) {
    return HttpHelper.notFound(res, "Nome não informado", 400);
  }

  if (!username) {
    return HttpHelper.notFound(res, "Username não informado", 400);
  }

  if (!senha) {
    return HttpHelper.notFound(res, "Senha não informada", 400);
  }

  next();
};
