import {MigrationInterface, QueryRunner} from "typeorm";

export class Createquestions1560503009257 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "questions" ("id" int NOT NULL IDENTITY(1,1), "description" nvarchar(255) NOT NULL, CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "questions"`);
    }

}
