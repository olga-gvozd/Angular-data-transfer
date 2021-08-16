import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  inputData: string;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();

    this.form.get('city').valueChanges
      .subscribe((data: string) => {
        console.log(data);
      });
  }

  private initForm(): void {
    // this.form = new FormGroup({
    //   name: new FormControl(''),
    //   age: new FormControl(25, Validators.min(30)),
    //   city: new FormControl(null, Validators.required),
    //   gender: new FormControl(null),
    // });
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      age: [25, Validators.max(27)],
      city: [],
      gender: [],
    });
  }

  getInputData(): void {
    if (this.form.valid) {
      const name = this.form.get('name').value;
      const age = this.form.get('age').value;
      const city = this.form.get('city').value;
      const gender = this.form.get('gender').value;
      this.inputData = `${name} ${age} ${city} ${gender}`;
    }
  }

  changeName(): void {
    this.form.get('name').setValue('Olga');
  }
}
