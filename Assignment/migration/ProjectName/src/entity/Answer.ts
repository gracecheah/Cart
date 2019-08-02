import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany
} from "typeorm";
import { User } from "./User";
import { AnswerVote } from "./AnswerVote";

@Entity({ name: "answers" })
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToOne(type => User, user => user.answers)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(type => AnswerVote, answer_vote => answer_vote.answer)
  answer_votes: AnswerVote[];
}
