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
  }

}
