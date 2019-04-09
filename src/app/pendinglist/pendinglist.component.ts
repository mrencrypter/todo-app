import { Component, OnInit } from '@angular/core';
import { Task } from 'src/model/task.model';
import { ListService } from 'src/service/list.service';

@Component({
  selector: 'app-pendinglist',
  templateUrl: './pendinglist.component.html',
  styleUrls: ['./pendinglist.component.css']
})
export class PendinglistComponent implements OnInit {
  
  pendingTasks:Task[] = [];

  constructor(private _listService:ListService) { }

  ngOnInit() {
    this.pendingTasks = this._listService.getTasks(false);
    this._listService.taskAdded.subscribe(
      (tasks: Task[]) => {
        this.pendingTasks = tasks;
      }
    );

    this._listService.taskDeleted.subscribe(
      (tasks:Task[]) => {
        this.pendingTasks = tasks.filter(x => x.IsCompleted === false);
      }
    );

    this._listService.taskCompleted.subscribe(
      (tasks:Task[]) => {
        this.pendingTasks = tasks.filter(x => x.IsCompleted === false);
      }
    )
  }

  onTaskDelete(taskId:number){
    this._listService.deleteTask(taskId);
  }

  onTaskComplete(taskId:number){
    this._listService.completeTask(taskId);
  }

}
