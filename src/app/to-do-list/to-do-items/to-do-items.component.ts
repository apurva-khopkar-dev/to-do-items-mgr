import { Component, OnInit, ViewChildren, AfterViewInit, QueryList, Output } from '@angular/core';
import { ToDoItem } from '../to-do-item.model';
import { ToDoEditComponent } from './to-do-edit/to-do-edit.component';
import { EventEmitter } from 'events';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ToDoAddModalComponent } from './to-do-add-modal/to-do-add-modal.component';
import { SelectionModel } from '@angular/cdk/collections';
import { ToDoListOperationsService } from '../to-do-list-services/to-do-list-operations/to-do-list-operations.service';
import { ToDoListService } from '../to-do-list-services/to-do-list/to-do-list.service';

export interface TodoListColumn {
  displayName: string;
  key: string;
}

let TO_DO_ITEMS: ToDoItem[] = [];

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent implements OnInit {

  displayedColumns: string[] = ['select',  'sequence', 'label', 'priority', 'operation' ];

  myColumns: TodoListColumn[] = [
    {displayName: 'No.', key: 'id'},
    {displayName: 'Label', key: 'label'},
    {displayName : 'Priority', key: 'priority'}
  ];
  dataSource;

  selection = new SelectionModel<ToDoItem>(true, []);

  constructor(public dialog: MatDialog,
              private toDoService: ToDoListService,
              private toDoOperationsService: ToDoListOperationsService) { }

  ngOnInit(): void {
    this.toDoService.getAllToDoItems().subscribe(data => {
      TO_DO_ITEMS = data;
      this.dataSource = new BehaviorSubject<ToDoItem[]>(TO_DO_ITEMS);
    });
  }

  public openAddItemDialog(operation: string, itemToBeEdited?: ToDoItem): void {
    const dialogRef = this.dialog.open(ToDoAddModalComponent, {
      width: '250px',
      data: {
        operation,
        item: itemToBeEdited ? itemToBeEdited : {}
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.data.operation === 'add') {
        this.addNewItem(result.data.item);
      } else {
        this.updateItem(result.data.item);
      }
    });
  }

  public updateItem(newItem): void {
    this.toDoOperationsService.updateItem(newItem).subscribe(data => {
      this.refreshItems(data);
    });
  }

  public deleteItem(itemToBeDeleted: ToDoItem): void{
    this.toDoOperationsService.deleteItem(itemToBeDeleted.id).subscribe(data => {
      this.refreshItems(data);
  });
}

  public deleteSelectedItems(): void {
    this.selection.selected.forEach((item) => {
        this.deleteItem(item);
    });
  }

  public addNewItem(itemToBeAdded): void {
    this.toDoOperationsService.addItem(itemToBeAdded).subscribe(data => {
      this.refreshItems(data);
    });
  }

  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = TO_DO_ITEMS.length;
    return numSelected === numRows;
  }

  public masterToggle(): void {
    this.isAllSelected() ?
        this.selection.clear() :
        TO_DO_ITEMS.forEach(row => this.selection.select(row));
  }
  public checkboxLabel(row?: ToDoItem): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

  private refreshItems(data): void {
    TO_DO_ITEMS = data;
    this.dataSource.next(TO_DO_ITEMS);
  }

}
