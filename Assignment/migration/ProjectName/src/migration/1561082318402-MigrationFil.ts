import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationFil1561082318402 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "question_votes" ("id" int NOT NULL IDENTITY(1,1), "vote_value" int NOT NULL, "user_id" int, "question_id" int, CONSTRAINT "PK_4fcf37b1bcad3cc75921424dc07" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "questions" ("id" int NOT NULL IDENTITY(1,1), "description" nvarchar(255) NOT NULL, "user_id" int, CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "answer_votes" ("id" int NOT NULL IDENTITY(1,1), "vote_value" int NOT NULL, "user_id" int, "answer_id" int, CONSTRAINT "PK_767f6bc508e4f2d6d08d65beb31" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "answers" ("id" int NOT NULL IDENTITY(1,1), "description" nvarchar(255) NOT NULL, "user_id" int, CONSTRAINT "PK_9c32cec6c71e06da0254f2226c6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "question_votes" ADD CONSTRAINT "FK_b3fd868c90abc25cab8159c4881" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "question_votes" ADD CONSTRAINT "FK_c7514956e9a7667e5d0136b2559" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_5800cd25a5888174b2c40e67d4b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer_votes" ADD CONSTRAINT "FK_ab3699386b605aa8235fde46cc4" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answer_votes" ADD CONSTRAINT "FK_f0157023465e675660fd1709118" FOREIGN KEY ("answer_id") REFERENCES "answers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "answers" ADD CONSTRAINT "FK_f4cf663ebeca05b7a12f6a2cc97" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "answers" DROP CONSTRAINT "FK_f4cf663ebeca05b7a12f6a2cc97"`);
        await queryRunner.query(`ALTER TABLE "answer_votes" DROP CONSTRAINT "FK_f0157023465e675660fd1709118"`);
        await queryRunner.query(`ALTER TABLE "answer_votes" DROP CONSTRAINT "FK_ab3699386b605aa8235fde46cc4"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_5800cd25a5888174b2c40e67d4b"`);
        await queryRunner.query(`ALTER TABLE "question_votes" DROP CONSTRAINT "FK_c7514956e9a7667e5d0136b2559"`);
        await queryRunner.query(`ALTER TABLE "question_votes" DROP CONSTRAINT "FK_b3fd868c90abc25cab8159c4881"`);
        await queryRunner.query(`DROP TABLE "answers"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "answer_votes"`);
        await queryRunner.query(`DROP TABLE "questions"`);
        await queryRunner.query(`DROP TABLE "question_votes"`);
    }

}
