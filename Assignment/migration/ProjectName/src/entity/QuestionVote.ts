import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { User } from "./User";
import { Question } from "./Question";

@Entity({ name: "question_votes" })
export class QuestionVote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vote_value: number;

  @ManyToOne(type => User, user => user.question_votes)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(type => Question, question => question.question_votes)
  @JoinColumn({ name: "question_id" })
  question: Question;
}
