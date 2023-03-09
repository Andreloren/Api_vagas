import { Status } from "./status.model";

export class Candidato {
  idCand?: number;
  nome: string;
  username: string;
  senha: string;
  status: string;
  vagasConcorridas?: [];

  constructor(
    nome: string,
    username: string,
    senha: string,
    status: Status,
    idCand?: number
  ) {
    this.nome = nome;
    this.username = username;
    this.senha = senha;
    this.status = status;
    this.idCand = idCand;
  }

  static create(
    nome: string,
    username: string,
    senha: string,
    idCand?: number
  ): Candidato {
    return new Candidato(nome, username, senha, Status.Candidato, idCand);
  }
}
