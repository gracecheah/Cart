import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column({ name: "num_pages" })
  numPages: number;
}
