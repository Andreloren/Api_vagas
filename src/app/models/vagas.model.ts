import { Recrutador } from "./recrutador.model";

export class Vagas {
  idVaga?: string;
  descricao: string;
  empresa: string;
  dtLimite: Date;
  ativo: boolean;
  recruiter: Recrutador;
  maxCandidatos?: number;

  constructor(
    descricao: string,
    empresa: string,
    dtLimite: Date,
    ativo: boolean,
    recruiter: Recrutador,
    maxCandidatos?: number,
    idVaga?: string
  ) {
    this.descricao = descricao;
    this.empresa = empresa;
    this.dtLimite = dtLimite;
    this.ativo = ativo;
    this.recruiter = recruiter;
    this.maxCandidatos = maxCandidatos;
    this.idVaga = idVaga;
  }

  static create(
    descricao: string,
    empresa: string,
    dtLimite: Date,
    ativo: boolean,
    recruiter: Recrutador,
    maxCandidatos?: number,
    idVaga?: string
  ): Vagas {
    return new Vagas(
      descricao,
      empresa,
      dtLimite,
      ativo,
      recruiter,
      maxCandidatos,
      idVaga
    );
  }
}
