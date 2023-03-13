import { Request, Response } from "express";
import { FindByUsernameService } from "../../../shared/service/findByUsername.service";
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

  public async listLogged(req: any, res: Response) {
    try {
      const useCase = new FindByUsernameService(new AdminRepository());

      const result = await useCase.execute(req.user.username);
      console.log(result);

      return HttpHelper.sucess(
        res,
        { username: result!.username, status: result!.status },
        "Usuário Logado com Sucesso"
      );
    } catch (error) {
      return HttpHelper.error(res, "Server not found");
    }
  }
}
