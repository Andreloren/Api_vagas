import { Admin } from "../../../models/admin.model";
import { CriptoService } from "../../../shared/service/cripto.service";
import { AdminRepository } from "../repositories/admin.repository";

interface CreateAdminDTO {
  nome: string;
  username: string;
  senha: string;
}

export class CreateAdminUseCase {
  constructor(private repository: AdminRepository) {}

  public async execute(data: CreateAdminDTO): Promise<Admin> {
    const criptoService = new CriptoService();

    const cryptoSenha = await criptoService.criptografa(data.senha);

    const admin = Admin.create(data.nome, data.username, cryptoSenha);

    return await this.repository.create(admin);
  }
}
