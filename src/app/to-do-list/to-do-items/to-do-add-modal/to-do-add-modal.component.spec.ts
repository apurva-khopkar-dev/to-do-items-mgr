import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoAddModalComponent } from './to-do-add-modal.component';

describe('ToDoAddModalComponent', () => {
  let component: ToDoAddModalComponent;
  let fixture: ComponentFixture<ToDoAddModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoAddModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
