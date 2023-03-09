import { Candidato } from "./candidato.model";
import { Recrutador } from "./recrutador.model";
import { Status } from "./status.model";
import { Vagas } from "./vagas.model";

export class Admin {
  idAdm?: number;
  nome: string;
  username: string;
  senha: string;
  status: string;
  usuarios?: [Admin[], Recrutador[], Candidato[]];
  totalVagas?: Vagas[];

  constructor(
    nome: string,
    username: string,
    senha: string,
    status: Status,
    idAdm?: number
  ) {
    this.nome = nome;
    this.username = username;
    this.senha = senha;
    this.status = status;
    this.idAdm = idAdm;
  }

  static create(
    nome: string,
    username: string,
    senha: string,
    idAdm?: number
  ): Admin {
    return new Admin(nome, username, senha, Status.Admin, idAdm);
  }

  static createRecrutador(
    nome: string,
    username: string,
    senha: string,
    nomeEmpresa: string,
    idRec?: number
  ): Recrutador {
    return new Recrutador(
      nome,
      username,
      senha,
      Status.Recrutador,
      nomeEmpresa,
      idRec
    );
  }
}
