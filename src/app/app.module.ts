import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { PendinglistComponent } from './pendinglist/pendinglist.component';
import { CompletedlistComponent } from './completedlist/completedlist.component';
import { FooterComponent } from './footer/footer.component';
import { ListService } from 'src/service/list.service';

const appRoutes: Routes = [
  {path: '', component:TasklistComponent},
  {path: 'addtask', component:AddtaskComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddtaskComponent,
    TasklistComponent,
    PendinglistComponent,
    CompletedlistComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ListService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
