import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { AdminEntity } from "./admin.entity";
import { VagasEntity } from "./vagas.entity";

@Entity({ name: "recrutador" })
export class RecrutadorEntity {
  @PrimaryGeneratedColumn()
  idRec?: number;

  @Column()
  nome!: string;

  @Column()
  username!: string;

  @Column()
  status!: string;

  @Column()
  senha!: string;

  @Column()
  nomeEmpresa!: string;

  @CreateDateColumn({ name: "createRec_at" })
  createRecAt?: Date;

  @Column({ name: "updateRec_at" })
  updateRecAt?: Date;

  @ManyToOne(() => AdminEntity, (fk) => fk.recrutadores)
  @JoinColumn({ name: "idAdm", referencedColumnName: "idAdm" })
  admin!: AdminEntity;

  @OneToMany(() => VagasEntity, (fk) => fk.recrutador)
  @JoinColumn({ name: "idVaga", referencedColumnName: "idVaga" })
  vagas!: VagasEntity[];

  @BeforeInsert()
  setCreatedAt?() {
    this.createRecAt = new Date();
  }

  @BeforeUpdate()
  beforeUpdate?() {
    this.updateRecAt = new Date();
  }
}
