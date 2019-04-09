import { Task } from 'src/model/task.model';
import { EventEmitter } from '@angular/core';

export class ListService{

    listId:number = 0;
    listItems:Task[] = [];
    taskAdded = new EventEmitter<Task[]>();
    taskDeleted = new EventEmitter<Task[]>();
    taskCompleted = new EventEmitter<Task[]>();

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
        this.taskAdded.emit(this.listItems);
    }

    deleteTask(taskId:number){
       let taskIndex = this.listItems.findIndex(x => x.Id === taskId);
       delete this.listItems[taskIndex];
       this.taskDeleted.emit(this.listItems);
    }

    completeTask(taskId:number){
        this.listItems.find(x => x.Id === taskId).IsCompleted = true;
        this.taskCompleted.emit(this.listItems);

    }
}