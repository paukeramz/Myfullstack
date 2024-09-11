
import { Controller, Get, Query, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
// import {CreateUserDto,UpdateUserDto,ListenAllEntities} from './dto';
import { TasksService } from './tasks.service';
@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) {}
    @Get() 
    getTask() {
        return this.taskService.findAllTasks();
    }
    @Get('taskId')
    getTaskById(@Param('taskId') id:number) {
        let task = this.taskService.findTaskById(id);
        if(!task) {
          throw new NotFoundException(`Task with Id ${id} not found`)  
        }
        return task;
    }

}
