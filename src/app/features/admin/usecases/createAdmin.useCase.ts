import { Admin } from "../../../models/admin.model";
import { AdminRepository } from "../repositories/admin.repository";

interface CreateAdminDTO {
  nome: string;
  username: string;
  senha: string;
}

export class CreateAdminUseCase {
  constructor(private repository: AdminRepository) {}

  public async execute(data: CreateAdminDTO): Promise<Admin> {
    const admin = Admin.create(data.nome, data.username, data.senha);

    return await this.repository.create(admin);
  }
}
