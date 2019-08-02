import { MigrationInterface, QueryRunner } from "typeorm";

export class addorders1564130378521 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "orders" ("id" int NOT NULL IDENTITY(1,1), "amount" int NOT NULL, "description" nvarchar(255) NOT NULL, "userid" int, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "email" nvarchar(255) `
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "address" nvarchar(255) `
    );
    await queryRunner.query(
      `ALTER TABLE "orders" ADD CONSTRAINT "FK_5f3e2f530c164243c140e751c51" FOREIGN KEY ("userid") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "orders" DROP CONSTRAINT "FK_5f3e2f530c164243c140e751c51"`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "address" nvarchar(255)`
    );
    await queryRunner.query(
      `ALTER TABLE "users" ALTER COLUMN "email" nvarchar(255)`
    );
    await queryRunner.query(`DROP TABLE "orders"`);
  }
}
