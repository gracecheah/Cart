import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { User } from "./User";

@Entity("orders")
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  description: string;

  @ManyToOne(type => User, user => user.orders)
  @JoinColumn({ name: "userid" })
  userid: User;
}
