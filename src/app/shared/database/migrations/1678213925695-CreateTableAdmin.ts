import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableAdmin1678213925695 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "admin",
        columns: [
          {
            name: "idAdm",
            type: "int4",
            isPrimary: true,
            isNullable: false,
            isGenerated: true,
            primaryKeyConstraintName: "pk_admin",
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
            name: "createAdm_at",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "updateAdm_at",
            type: "timestamp",
            isNullable: true,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("admin", true, true, true);
  }
}
