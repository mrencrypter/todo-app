import { TasklistComponent } from './tasklist/tasklist.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    {path: '', component:TasklistComponent},
    {path: 'addtask', component:AddtaskComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
    
}