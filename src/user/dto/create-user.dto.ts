import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsNotEmpty, IsEmail, Length, Matches, MaxLength} from 'class-validator';

@Entity()
export class CreateUserDto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @Length(4, 50)
  name: string;

  @Column()
  @IsEmail()
  @MaxLength(50)
  @IsNotEmpty()
  email: string;

  @Column()
  @IsString()
  @Length(8, 50)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/, {
    message: 'Password must include lowercase, uppercase, numbers, and special characters.',
  })
  password: string;

  @Column()
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  address: string;
}