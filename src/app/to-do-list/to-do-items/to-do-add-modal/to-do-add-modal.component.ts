import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AddModalDialogData } from './add-modal-dialog-data.model';
import { ToDoItem } from '../../to-do-item.model';

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
   label: new FormControl('', [Validators.required]),
    priority: new FormControl(1, [Validators.required, Validators.min(1)])
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
