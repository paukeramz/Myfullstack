import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    
    return this.userService.create(user);
  }
  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }


  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<User> {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id);
  }
}
