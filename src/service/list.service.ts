import { Task } from 'src/model/task.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ListService{
    test:string;

    listId:number = 0;
    listItems:Task[] = [];
    taskAdded = new Subject<Task[]>();
    taskDeleted = new Subject<Task[]>();
    taskCompleted = new Subject<Task[]>();

    generateNextId(){
        return this.listId++;
    }

    getAllTasks() {
        return this.listItems;
    }

    getTasks(isCompledted:boolean = false){
        return this.listItems.filter(x => x.IsCompleted === isCompledted)
    }

    addTask(message:string){
        this.listItems.push({
            Id: this.generateNextId(),
            Message: message,
            IsCompleted : false
        });
        this.taskAdded.next(this.listItems);
    }

    deleteTask(taskId:number){
       let taskIndex = this.listItems.findIndex(x => x.Id === taskId);
       delete this.listItems[taskIndex];
       this.taskDeleted.next(this.listItems);
    }

    completeTask(taskId:number){
        this.listItems.find(x => x.Id === taskId).IsCompleted = true;
        this.taskCompleted.next(this.listItems);

    }
}