import { NextFunction, Request, Response } from "express";
import { HttpHelper } from "../../../shared/util/http.helper";
import { AdminRepository } from "../repositories/admin.repository";
import { FindByUsernameService } from "../../../shared/service/findByUsername.service";

export const checkDuplicateAdminValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username } = req.body;

    const usecase = new FindByUsernameService(new AdminRepository());

    const result = usecase.execute(username);

    if (!result) {
      return next();
    }
    return HttpHelper.badRequest(res, `${username} já cadastrado`);
  } catch (error: any) {
    return HttpHelper.error(res, "Server not found");
  }
};
