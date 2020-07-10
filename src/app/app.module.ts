import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { ToDoItemsContainerComponent } from './to-do-list/to-do-items-container/to-do-items-container.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToDoListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
