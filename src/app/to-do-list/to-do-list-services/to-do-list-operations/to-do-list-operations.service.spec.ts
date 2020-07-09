import { TestBed } from '@angular/core/testing';

import { ToDoListOperationsService } from './to-do-list-operations.service';

describe('ToDoListOperationsService', () => {
  let service: ToDoListOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoListOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
