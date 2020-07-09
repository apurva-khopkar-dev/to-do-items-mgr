import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDoItem } from '../../../../../../to-do-list copy/src/app/to-do-list/to-do-item.model';
import { FormBuilder } from '@angular/forms';
import { AddModalDialogData } from './add-modal-dialog-data.model';

@Component({
  selector: 'app-to-do-add-modal',
  templateUrl: './to-do-add-modal.component.html',
  styleUrls: ['./to-do-add-modal.component.css']
})
export class ToDoAddModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ToDoAddModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: AddModalDialogData,
              private formBuilder: FormBuilder){ }

  modalForm = this.formBuilder.group({
    label: '',
    priority: 0
  });

  itemData: ToDoItem = {
    id: 0,
    label: '',
    priority: 0
  };

  ngOnInit(): void {
    if (this.data.operation === 'edit') {
      this.itemData = this.data.item;
      this.modalForm.setValue({
        label: this.itemData.label,
        priority: this.itemData.priority
      });
    }
  }

  onSubmit(): void {
    this.itemData.label = this.modalForm.get('label').value;
    this.itemData.priority = this.modalForm.get('priority').value;
    this.dialogRef.close({event: 'submit', data: {
      item: this.itemData,
      operation: this.data.operation
    }});
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
