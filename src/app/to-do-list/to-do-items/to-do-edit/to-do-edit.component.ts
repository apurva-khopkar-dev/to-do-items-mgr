import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ElementRef, ChangeDetectorRef } from '@angular/core';
import { ToDoItem } from '../../to-do-item.model';
import { TodoListColumn } from '../to-do-items.component';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { fromEvent, Subject, } from 'rxjs';
import { switchMap, takeUntil, filter, take, switchMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-to-do-edit',
  templateUrl: './to-do-edit.component.html',
  styleUrls: ['./to-do-edit.component.css']
})
export class ToDoEditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private host: ElementRef, private cd: ChangeDetectorRef) { }

  editMode = false;

  @Input()
  tableData: Subject<ToDoItem[]>;

  @Input()
  currentColumn: TodoListColumn;

  @Input()
  rowIndex: number;

  @Output()
  updateRowData = new EventEmitter<ToDoItem>();

  dataForm = this.formBuilder.group({
    label: new FormControl('', [Validators.required]),
    priority: new FormControl(1, [Validators.required, Validators.min(1)])
  });

  currentItem: ToDoItem;
  itemList: ToDoItem[];

  ngOnInit(): void {
    this.tableData.asObservable().subscribe((data) => {
      this.itemList = data;
      this.currentItem = data[this.rowIndex];
      this.dataForm.setValue({
        label: this.currentItem.label,
        priority: this.currentItem.priority
      });
    });
    this.dblClickEventListener();
  }

  public onValueChanged() {
    if (this.dataForm.valid) {
      this.itemList.map((item, index) => {
        if (item.id === this.currentItem.id) {
          item.label = this.dataForm.get('label').value;
          item.priority = this.dataForm.get('priority').value;
        }
      });
      this.editMode = false;
      this.tableData.next(this.itemList);
    }
  }

  private dblClickEventListener() {
    fromEvent(this.element, 'dblclick').subscribe(() => {
      this.editMode = true;
    });
  }

  private get element() {
    return this.host.nativeElement;
  }

}
