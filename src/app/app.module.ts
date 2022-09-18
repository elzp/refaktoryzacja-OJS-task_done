import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TaskCreatorComponentComponent } from './task-creator-component/task-creator-component.component';
import { TasksCounterComponentComponent } from './tasks-counter-component/tasks-counter-component.component';
import { TasksListComponentComponent } from './tasks-list-component/tasks-list-component.component';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    TaskCreatorComponentComponent,
    TasksCounterComponentComponent,
    TasksListComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
