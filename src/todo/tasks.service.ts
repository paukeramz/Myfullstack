import { Injectable } from '@nestjs/common';
import { TaskModel } from './tasks.model';

@Injectable()
export class TasksService {
    _tasks: TaskModel []=[
        {id:1,description:'Create a backend', is_complete: true},
        {id:2,description:'Create a fontend', is_complete: false},
        {id:3,description:'Create a fullstack', is_complete: false}
    ]
    findAllTasks (): TaskModel []{
        return this._tasks;
    }
    findTaskById(id:number): TaskModel {
        return this._tasks.find(t => t.id == id);
    }
}
