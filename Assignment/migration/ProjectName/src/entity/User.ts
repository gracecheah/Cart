import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Question } from "./Question";
import { Answer } from "./Answer";
import { QuestionVote } from "./QuestionVote";
import { AnswerVote } from "./AnswerVote";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => Question, question => question.user)
  questions: Question;

  @OneToMany(type => Answer, answer => answer.user)
  answers: Answer;

  @OneToMany(type => QuestionVote, question_vote => question_vote.user)
  question_votes: QuestionVote[];

  @OneToMany(type => AnswerVote, answer_vote => answer_vote.user)
  answer_votes: AnswerVote[];
}
