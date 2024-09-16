import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async createUser(name: string, email: string, address: string): Promise<User> {
    const user = this.usersRepository.create({ name, email, address });
    return this.usersRepository.save(user);
  }

  async findUser(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async updateUser(id: number, username: string, email: string, address: string): Promise<User | null> {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user) return null;

    user.name = username;
    user.email = email;
    user.address = address;
    return this.usersRepository.save(user);
  }

  async deleteUser(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}