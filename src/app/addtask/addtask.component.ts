import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ListService } from 'src/service/list.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  @ViewChild('taskMessage') taskMessage:ElementRef;

  constructor(private _listService:ListService) { }

  ngOnInit() {
  }

  onAddNewTask(){
    this._listService.addTask(this.taskMessage.nativeElement.value);
  }

}
