import { TestBed } from '@angular/core/testing';

import { ToDoListService } from './to-do-list.service';
import { HttpClientModule } from '@angular/common/http';

describe('ToDoListService', () => {
  let service: ToDoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule]
    });
    service = TestBed.inject(ToDoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
