import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import { AdminEntity } from "../../../shared/database/entities/admin.entity";
import { CandidatoEntity } from "../../../shared/database/entities/candidato.entity";
import { RecrutadorEntity } from "../../../shared/database/entities/recrutador.entity";

export class LoginRepository {
  private repository = DatabaseConnection.connection.getRepository(
    AdminEntity || RecrutadorEntity || CandidatoEntity
  );

  public async checkLogin(username: string, senha: string) {
    const user = await this.repository.findOneBy({ username, senha });

    if (!user) {
      return null;
    }

    return user;
  }

  public async getUserLogged(username: string) {
    const userLogged = await this.repository.findOneBy({ username });

    if (!userLogged) {
      return null;
    }

    return userLogged;
  }
}
