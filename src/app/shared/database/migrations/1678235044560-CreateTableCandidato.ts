import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableCandidato1678235044560 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "candidato",
        columns: [
          {
            name: "idCand",
            type: "int4",
            isPrimary: true,
            isNullable: false,
            isGenerated: true,
            primaryKeyConstraintName: "idCand",
          },
          {
            name: "nome",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "username",
            type: "varchar",
            length: "20",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "status",
            type: "varchar",
            length: "10",
            isNullable: false,
          },
          {
            name: "senha",
            type: "varchar",
            length: "20",
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
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("candidato", true, true, true);
  }
}
