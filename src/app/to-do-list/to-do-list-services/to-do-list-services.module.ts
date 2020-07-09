import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListService } from './to-do-list/to-do-list.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ToDoListService]
})
export class ToDoListServicesModule { }
