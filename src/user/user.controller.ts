import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { ValidationPipe } from '@nestjs/common';
import { validate } from 'class-validator';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return await this.userService.findOne(id);
  }
  @Post()
  async createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    const errors = await validate(createUserDto);
    if (errors.length > 0) {
      throw new Error(`Validation failed: ${errors}`);
    }

    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.address = createUserDto.address;

   return await this.userService.createUser(user);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<User> {
    
    return await this.userService.updateUser(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.userService.remove(id);
  }
}