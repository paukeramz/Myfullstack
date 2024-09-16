import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UserService) {}

  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.usersService.createUser(user.name, user.email, user.address);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User | null> {
    return this.usersService.findUser(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<User | null> {
    return this.usersService.updateUser(id, user.name, user.email, user.address);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.usersService.deleteUser(id);
  }
}