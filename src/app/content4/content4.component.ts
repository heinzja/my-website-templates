import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './content4.component.html',
  styleUrls: ['./content4.component.scss']
})
export class Content4Component implements OnInit {
  MIN_NAME_LENGTH = 3;
  MAX_NAME_LENGTH = 15;
  MAX_DESCRIPTION_LENGTH = 500;

  nameFormControl = new FormControl('',[
    Validators.minLength(this.MIN_NAME_LENGTH),
    Validators.maxLength(this.MAX_NAME_LENGTH),
    Validators.pattern('[a-zA-Z ]*'),
    Validators.required,
  ]);
  dateFormControl = new FormControl('',[
    Validators.required,
  ]);
  emailFormControl = new FormControl('',[
    Validators.email,
    Validators.required,
  ]);
  descriptionFormControl = new FormControl('',[
    Validators.maxLength(this.MAX_DESCRIPTION_LENGTH),
  ]);

  myFormGroup: FormGroup = new FormGroup(
    {
      name: this.nameFormControl,
      date: this.dateFormControl,
      email: this.emailFormControl,
      description: this.descriptionFormControl,
    }
  )

  constructor() {
    this.myFormGroup.valueChanges.subscribe(change => {
      console.log(change);
    });
  }

  ngOnInit(): void {
  }

}
