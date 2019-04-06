import { Component, OnInit } from '@angular/core';
import { Task } from 'src/model/task.model';
import { ListService } from 'src/service/list.service';

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
  }

}
