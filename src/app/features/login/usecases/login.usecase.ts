import "dotenv/config";

import { CriptoService } from "../../../shared/service/cripto.service";
import { AdminRepository } from "../../admin/repositories/admin.repository";

import * as jwt from "jsonwebtoken";

export interface LoginDTO {
  username: string;
  senha: string;
}

export interface LoginResponseDto {
  message: string;
  username?: string;
  token?: string;
}

export class LoginUsecase {
  constructor(private repository: AdminRepository) {}

  public async execute(data: LoginDTO): Promise<LoginResponseDto> {
    const user = await this.repository.getByUsername(data.username);

    if (!user) {
      return {
        message: "Usuario não encontrado",
      };
    }

    const criptoService = new CriptoService();

    const match = await criptoService.comparar(data.senha, user.senha);

    if (!match) {
      return {
        message: "Senha incorreta",
      };
    }

    const token = jwt.sign(
      {
        id: user.idAdm,
        username: user.username,
        status: user.status,
      },
      //process.env.SECRET!,
      "alr1982*",
      {
        expiresIn: "1d",
      }
    );

    return {
      message: "OK",
      token,
    };
  }
}
