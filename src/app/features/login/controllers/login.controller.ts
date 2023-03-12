import { Request, Response } from "express";
import { HttpHelper } from "../../../shared/util/http.helper";
import { AdminRepository } from "../../admin/repositories/admin.repository";
import { LoginUsecase } from "../usecases/login.usecase";

export class LoginController {
  public async login(req: Request, res: Response) {
    try {
      const { username, senha } = req.body;

      const useCase = new LoginUsecase(new AdminRepository());

      const result = await useCase.execute({ username, senha });

      if (!result) {
        return HttpHelper.badRequest(res, "Usuário ou senha inválida", 403);
      }
      return HttpHelper.sucess(res, result);
    } catch (error) {
      return HttpHelper.error(res, "Server not found");
    }
  }
}
