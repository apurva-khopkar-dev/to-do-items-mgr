import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoEditComponent } from './to-do-edit.component';
import { FormBuilder } from '@angular/forms';
import { of, Observable, BehaviorSubject, Subject } from 'rxjs';
import { ToDoListService, ToDoListOperationsService } from '../../to-do-list-services/to-do-list-services.module';
import { ToDoItem } from '../../to-do-item.model';
import { Injectable } from '@angular/core';

describe('ToDoEditComponent', () => {
  let component: ToDoEditComponent;
  let fixture: ComponentFixture<ToDoEditComponent>;

  const items: ToDoItem[] = [
    { id: 12312,  label: 'Groceries', priority: 1},
    { id: 45343, label: 'Bike repair', priority: 2},
    { id: 45454, label: 'Bill payments', priority: 3},
    { id: 67677, label: 'Car servicing', priority: 4},
    { id: 68997, label: 'Call plumber', priority: 5},
    { id: 24545, label: 'Fund transfer to bank', priority: 6},
    { id: 78686, label: 'Annual medical checkup', priority: 7},
    { id: 69893, label: 'Society meeting', priority: 8},
    { id: 35576, label: 'School reunion planner', priority: 9},
    { id: 79002, label: 'UPS replacement', priority: 10},
    { id: 15853, label: 'Mobile recharge', priority: 11},
    { id: 85754, label: 'Technology meetup', priority: 12},
    { id: 56799, label: 'Read a book', priority: 13}
];

  let tableData;
  @Injectable()
  class MockToDoListService extends ToDoListService{
   getAllToDoItems(): Observable<ToDoItem[]> {
            return of(items);
    }
}
  @Injectable()
  class MockToDoListOperationsService extends ToDoListOperationsService{
    public addItem(item: ToDoItem): Observable<ToDoItem[]>  {
      items.push(item);
      return of(items);
    }
}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoEditComponent ],
      providers: [ FormBuilder,
        { provide: ToDoListService, useClass: MockToDoListService },
        { provide: ToDoListOperationsService, useClass: MockToDoListOperationsService }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ToDoEditComponent);
    component = fixture.componentInstance;
    component.tableData = new BehaviorSubject<ToDoItem[]>(items);
    component.rowIndex = 1;
    component.currentColumn = {displayName: 'Label', key: 'label'};
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
