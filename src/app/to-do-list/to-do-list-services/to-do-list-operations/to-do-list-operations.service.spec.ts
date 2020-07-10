import { TestBed } from '@angular/core/testing';

import { ToDoListOperationsService } from './to-do-list-operations.service';
import { ToDoListService } from '../to-do-list-services.module';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ToDoItem } from '../../../../../../to-do-list copy/src/app/to-do-list/to-do-item.model';
import { HttpClientModule } from '@angular/common/http';

describe('ToDoListOperationsService', () => {
  let service: ToDoListOperationsService;

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule]
    });
    service = TestBed.inject(ToDoListOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
