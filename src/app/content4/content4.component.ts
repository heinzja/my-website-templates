import { ViewChild } from '@angular/core';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';

@Component({
  templateUrl: './content4.component.html',
  styleUrls: ['./content4.component.scss'],
})
export class Content4Component implements OnInit {
  @ViewChild(MatTable) table!: MatTable<FormSubmissionI>;

  MIN_NAME_LENGTH = 3;
  MAX_NAME_LENGTH = 15;
  MAX_DESCRIPTION_LENGTH = 500;
  submissions: FormSubmissionI[] = [];
  displayedColumns: string[] = ['name', 'date', 'email', 'description'];

  nameFormControl = new FormControl('', [
    Validators.minLength(this.MIN_NAME_LENGTH),
    Validators.maxLength(this.MAX_NAME_LENGTH),
    Validators.pattern('[a-zA-Z ]*'),
    Validators.required,
  ]);
  dateFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [
    Validators.email,
    Validators.required,
  ]);
  descriptionFormControl = new FormControl('', [
    Validators.maxLength(this.MAX_DESCRIPTION_LENGTH),
  ]);

  myFormGroup: FormGroup = new FormGroup({
    name: this.nameFormControl,
    date: this.dateFormControl,
    email: this.emailFormControl,
    description: this.descriptionFormControl,
  });

  constructor() {
    this.myFormGroup.valueChanges.subscribe((change) => {
      console.log(change);
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.submissions.push({
      name: this.myFormGroup.get('name')?.value,
      date: this.myFormGroup.get('date')?.value,
      email: this.myFormGroup.get('email')?.value,
      description: this.myFormGroup.get('description')?.value,
    });

    console.log(this.submissions);
    this.table.renderRows();
    this.myFormGroup.reset();
  }

  onReset(): void {
    this.myFormGroup.reset();
  }
}

interface FormSubmissionI {
  name: string;
  date: Date | null;
  email: string;
  description: string;
}
