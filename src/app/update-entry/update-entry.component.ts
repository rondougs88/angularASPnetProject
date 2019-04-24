import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Type } from '../interfaces/Type';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrls: ['./update-entry.component.css']
})
export class UpdateEntryComponent implements OnInit {
form: FormGroup;
id: number;

types: Type[] = [
  { value: true, display: 'Expense' },
  { value: false, display: 'Income' },
];

  constructor(private fb: FormBuilder,
      private dialogRef: MatDialogRef<UpdateEntryComponent>,
      @Inject(MAT_DIALOG_DATA){Description, isExpense, Value, Id},
      private service: EntryService) { 
        this.id = Id;
        this.form = fb.group({
          Description: [Description, Validators.required],
          isExpense: [isExpense, Validators.required],
          Value: [Value, Validators.required],
        });
      }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

  save() {
    this.form.value.id = this.id;
    this.service.updateEntry(this.id, this.form.value)
    .subscribe((data) => {
      console.log(data);
    });
  }

}
