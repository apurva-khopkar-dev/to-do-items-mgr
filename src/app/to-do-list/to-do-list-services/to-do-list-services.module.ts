import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListService } from './to-do-list/to-do-list.service';
import { HttpClientModule } from '@angular/common/http';
import { ToDoListOperationsService } from './to-do-list-operations/to-do-list-operations.service';
export { ToDoListService } from './to-do-list/to-do-list.service';
export { ToDoListOperationsService } from './to-do-list-operations/to-do-list-operations.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: []
})
export class ToDoListServicesModule { }
