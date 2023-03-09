import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { VagasEntity } from "./vagas.entity";

@Entity({ name: "candidato" })
export class CandidatoEntity {
  @PrimaryGeneratedColumn()
  idCand?: number;

  @Column()
  nome!: string;

  @Column()
  username!: string;

  @Column()
  senha!: string;

  @Column()
  starus!: string;

  @CreateDateColumn({ name: "createCand_at" })
  createCandAt?: Date;

  @Column({ name: "updateCand_at" })
  updateCandAt?: Date;

  @ManyToMany(() => VagasEntity, (fk) => fk.candidatos)
  @JoinColumn({ name: "idVaga", referencedColumnName: "idVaga" })
  vagas!: VagasEntity[];

  @BeforeInsert()
  setCreatedAt?() {
    this.createCandAt = new Date();
  }

  @BeforeUpdate()
  beforeUpdate?() {
    this.updateCandAt = new Date();
  }
}
