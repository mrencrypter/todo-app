import { Component, OnInit } from '@angular/core';
import { Task } from 'src/model/task.model';
import { ListService } from 'src/service/list.service';
import { isComponent } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-completedlist',
  templateUrl: './completedlist.component.html',
  styleUrls: ['./completedlist.component.css']
})
export class CompletedlistComponent implements OnInit {

  completedTasks:Task[] = [];

  constructor(private _listService:ListService) { }

  ngOnInit() {
    this.completedTasks = this._listService.getTasks(true);
    this._listService.taskCompleted.subscribe(
      (tasks: Task[]) => {
        this.completedTasks = tasks.filter(x => x.IsCompleted === true);
      }
    )
  }

}
