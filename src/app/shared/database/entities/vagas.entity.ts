import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { CandidatoEntity } from "./candidato.entity";
import { RecrutadorEntity } from "./recrutador.entity";

@Entity({ name: "vagas" })
export class VagasEntity {
  @PrimaryGeneratedColumn("uuid")
  idVaga?: string;

  @Column()
  descricao!: string;

  @Column()
  empresa!: string;

  @Column()
  dtLimite!: Date;

  @Column()
  ativo!: boolean;

  @Column()
  recruiter!: string;

  @Column()
  maxCandidatos!: number;

  @CreateDateColumn({ name: "createVaga_at" })
  createVagaAt?: Date;

  @Column({ name: "updateVaga_at" })
  updateVagaAt?: Date;

  @ManyToOne(() => RecrutadorEntity, (fk) => fk.vagas)
  @JoinColumn({ name: "idRec", referencedColumnName: "idRec" })
  recrutador!: RecrutadorEntity;

  @ManyToMany(() => CandidatoEntity, (fk) => fk.vagas)
  @JoinColumn({ name: "idCand", referencedColumnName: "idCand" })
  candidatos!: CandidatoEntity[];

  @BeforeInsert()
  setCreatedAt?() {
    this.createVagaAt = new Date();
  }

  @BeforeUpdate()
  beforeUpdate?() {
    this.updateVagaAt = new Date();
  }
}
