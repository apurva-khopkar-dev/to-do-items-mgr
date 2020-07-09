import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoItemsContainerComponent } from './to-do-items-container.component';

describe('ToDoItemsContainerComponent', () => {
  let component: ToDoItemsContainerComponent;
  let fixture: ComponentFixture<ToDoItemsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoItemsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoItemsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
