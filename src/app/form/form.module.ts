import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    InputTextModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
