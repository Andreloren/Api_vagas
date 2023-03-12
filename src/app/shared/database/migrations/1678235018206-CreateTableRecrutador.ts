import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableRecrutador1678235018206 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "recrutador",
        columns: [
          {
            name: "idRec",
            type: "int4",
            isPrimary: true,
            isNullable: false,
            isGenerated: true,
            primaryKeyConstraintName: "idRec",
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
            length: "100",
            isNullable: false,
          },
          {
            name: "nomeEmpresa",
            type: "varchar",
            length: "20",
            isNullable: false,
          },
          {
            name: "idAdm",
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
            name: "recrutadores_admin",
            columnNames: ["idAdm"],
            referencedTableName: "admin",
            referencedColumnNames: ["idAdm"],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("recrutador", true, true, true);
  }
}
