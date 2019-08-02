import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from "typeorm";
import { User } from "./User";
import { Answer } from "./Answer";

@Entity({ name: "answer_votes" })
export class AnswerVote {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vote_value: number;

  @ManyToOne(type => User, user => user.answer_votes)
  @JoinColumn({ name: "user_id" })
  user: User;

  @ManyToOne(type => Answer, answer => answer.answer_votes)
  @JoinColumn({ name: "answer_id" })
  answer: Answer;
}
