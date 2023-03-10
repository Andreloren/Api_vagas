import { Response, Request } from "express";
import { FindAllUsersService } from "../../../shared/service/findAllUsers.service";
import { HttpHelper } from "../../../shared/util/http.helper";
import { AdminRepository } from "../repositories/admin.repository";
import { CreateAdminUseCase } from "../usecases/createAdmin.useCase";

export class AdminController {
  public async create(req: Request, res: Response) {
    try {
      const { nome, username, senha } = req.body;

      const useCase = new CreateAdminUseCase(new AdminRepository());

      const result = await useCase.execute({ nome, username, senha });

      return HttpHelper.sucess(res, result, "Admin criado com Sucesso", 201);
    } catch (error) {
      return HttpHelper.error(res, "Server not found");
    }
  }

  public async listAll(req: Request, res: Response) {
    try {
      const useCase = new FindAllUsersService(new AdminRepository());

      const result = await useCase.execute();

      return HttpHelper.sucess(res, result);
    } catch (error) {
      return HttpHelper.error(res, "Server not found");
    }
  }
}
