import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from 'src/model/task.model';
import { ListService } from 'src/service/list.service';
import { isComponent } from '@angular/core/src/render3/util';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-completedlist',
  templateUrl: './completedlist.component.html',
  styleUrls: ['./completedlist.component.css']
})
export class CompletedlistComponent implements OnInit,OnDestroy {

  completedTasks:Task[] = [];
  subscription:Subscription;
  constructor(private _listService:ListService) { }

  ngOnInit() {
    this.completedTasks = this._listService.getTasks(true);
    this.subscription = this._listService.taskCompleted.subscribe(
      (tasks: Task[]) => {
        this.completedTasks = tasks.filter(x => x.IsCompleted === true);
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
