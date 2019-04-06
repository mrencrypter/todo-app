import { Task } from 'src/model/task.model';

export class ListService{

    listId:number = 0;

    listItems:Task[] = [];

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
    }
}