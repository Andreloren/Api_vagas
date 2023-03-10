import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import { Admin } from "../../../models/admin.model";
import { AdminEntity } from "../../../shared/database/entities/admin.entity";

export class AdminRepository {
  private _repository =
    DatabaseConnection.connection.getRepository(AdminEntity);

  private mapToModel(entity: AdminEntity) {
    return Admin.create(
      entity.nome,
      entity.username,
      entity.senha,
      entity.idAdm
    );
  }

  public async create(admin: AdminEntity): Promise<Admin> {
    const adminEntity = this._repository.create({
      idAdm: admin.idAdm,
      nome: admin.nome,
      username: admin.username,
      senha: admin.senha,
      status: admin.status,
    });

    const result = await this._repository.save(adminEntity);

    return result;
  }

  public async getByUsername(username: string) {
    const result = await this._repository.findOneBy({ username });

    if (!result) {
      return null;
    }
    return this.mapToModel(result);
  }

  public async getAll() {
    const result = await this._repository.find();

    if (!result) {
      return null;
    }
    return result.map((user) => this.mapToModel(user));
  }
}
