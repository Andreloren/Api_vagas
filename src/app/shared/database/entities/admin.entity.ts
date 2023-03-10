import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { RecrutadorEntity } from "./recrutador.entity";

@Entity({ name: "admin" })
export class AdminEntity {
  @PrimaryGeneratedColumn()
  idAdm?: number;

  @Column()
  nome!: string;

  @Column()
  username!: string;

  @Column()
  status!: string;

  @Column()
  senha!: string;

  @CreateDateColumn({ name: "createAdm_at" })
  createAdmAt?: Date;

  @Column({ name: "updateAdm_at" })
  updateAdmAt?: Date;

  @OneToMany(() => RecrutadorEntity, (fk) => fk.admin_recrutador)
  @JoinColumn({ name: "idRec", referencedColumnName: "idRec" })
  recrutadores_admin?: RecrutadorEntity[];

  @BeforeInsert()
  setCreatedAt?() {
    this.createAdmAt = new Date();
  }

  @BeforeUpdate()
  beforeUpdate?() {
    this.updateAdmAt = new Date();
  }
}
