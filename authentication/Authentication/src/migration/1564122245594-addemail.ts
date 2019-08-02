import { MigrationInterface, QueryRunner } from "typeorm";

export class addemail1564122245594 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "users" ADD "email" nvarchar(255)`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
  }
}
