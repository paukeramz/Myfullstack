import { Entity, Column, PrimaryGeneratedColumn, IntegerType } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
  @Column() 
  address: string;
}
