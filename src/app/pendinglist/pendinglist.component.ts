import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from 'src/model/task.model';
import { ListService } from 'src/service/list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pendinglist',
  templateUrl: './pendinglist.component.html',
  styleUrls: ['./pendinglist.component.css']
})
export class PendinglistComponent implements OnInit, OnDestroy {
  
  addedSubscription:Subscription;
  deletedSubscription:Subscription;
  completedSubscription:Subscription;
  pendingTasks:Task[] = [];

  constructor(private _listService:ListService) { }

  ngOnInit() {
    this.pendingTasks = this._listService.getTasks(false);
    this.addedSubscription = this._listService.taskAdded.subscribe(
      (tasks: Task[]) => {
        this.pendingTasks = tasks;
      }
    );

    this.deletedSubscription = this._listService.taskDeleted.subscribe(
      (tasks:Task[]) => {
        this.pendingTasks = tasks.filter(x => x.IsCompleted === false);
      }
    );

    this.completedSubscription = this._listService.taskCompleted.subscribe(
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

  ngOnDestroy(){
    this.addedSubscription.unsubscribe();
    this.deletedSubscription.unsubscribe();
    this.completedSubscription.unsubscribe();
  }

}
