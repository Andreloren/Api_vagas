import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableVagas1678322372051 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "vagas",
        columns: [
          {
            name: "idVaga",
            type: "uuid",
            isPrimary: true,
            isNullable: false,
            isGenerated: true,
            primaryKeyConstraintName: "idVaga",
          },
          {
            name: "descricao",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "empresa",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "dtLimite",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "ativo",
            type: "boolean",
            isNullable: true,
          },
          {
            name: "recruiter",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "maxCandidatos",
            type: "integer",
            isNullable: false,
          },
          {
            name: "idRec",
            type: "int4",
            isNullable: false,
          },
          {
            name: "idCand",
            type: "int4",
            isNullable: false,
          },
          {
            name: "createRec_at",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "updateRec_at",
            type: "timestamp",
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: "vagas_recrutador",
            columnNames: ["idRec"],
            referencedTableName: "recrutador",
            referencedColumnNames: ["idRec"],
          },
          {
            name: "vaga_candidato",
            columnNames: ["idCand"],
            referencedTableName: "candidato",
            referencedColumnNames: ["idCand"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("vagas", true, true, true);
  }
}
