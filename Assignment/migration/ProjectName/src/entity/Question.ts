import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import { User } from "./User";
import { QuestionVote } from "./QuestionVote";

@Entity({ name: "questions" })
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(type => User, user => user.questions)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(type => QuestionVote, question_vote => question_vote.question)
  question_votes: QuestionVote[];
}
