import {MigrationInterface, QueryRunner} from "typeorm";

export class Createanswers1560503659382 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "answers" ("id" int NOT NULL IDENTITY(1,1), "description" nvarchar(255) NOT NULL, CONSTRAINT "PK_9c32cec6c71e06da0254f2226c6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "answers"`);
    }

}
