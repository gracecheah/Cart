import { MigrationInterface, QueryRunner } from "typeorm";

export class addaddress1564129046183 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "users" ADD "address" nvarchar(255)`);
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "email" nvarchar(255)`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "email" nvarchar(255)`
    );
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "address"`);
  }
}
