import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  inputData: string;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();

    this.form.get('city').valueChanges
      .subscribe((data: string) => {
        console.log(data);
      });
  }
  
  goToParentState(): void {
    this.router.navigate(['parent']);
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      age: [null, Validators.max(27)],
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
