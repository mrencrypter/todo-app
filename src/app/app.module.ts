import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { PendinglistComponent } from './pendinglist/pendinglist.component';
import { CompletedlistComponent } from './completedlist/completedlist.component';
import { FooterComponent } from './footer/footer.component';
import { ListService } from 'src/service/list.service';
import { AppRoutingModule } from './app-routing.module';

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
    AppRoutingModule
  ],
  providers: [
    ListService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
