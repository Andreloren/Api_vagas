import { Status } from "./user.model";
import { Vagas } from "./vagas.model";

export class Recrutador {
  idRec?: number;
  nome: string;
  username: string;
  senha: string;
  status: string;
  nomeEmpresa: string;
  vagasCriadas?: Vagas[];

  constructor(
    nome: string,
    username: string,
    senha: string,
    status: Status,
    nomeEmpresa: string,
    idRec?: number
  ) {
    this.nome = nome;
    this.username = username;
    this.senha = senha;
    this.nomeEmpresa = nomeEmpresa;
    this.status = status;
    this.idRec = idRec;
  }

  static createVaga(
    descricao: string,
    empresa: string,
    dtLimite: Date,
    ativo: boolean,
    recrutador: Recrutador,
    maxCandidatos?: number,
    idVaga?: string
  ): Vagas {
    return new Vagas(
      descricao,
      empresa,
      dtLimite,
      ativo,
      recrutador,
      maxCandidatos,
      idVaga
    );
  }
}
