import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FormInputComponent} from './form-input/form-input.component';

@NgModule({
  declarations: [
    FormInputComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  exports: [
    FormInputComponent
  ]
})

export class CoreModule {
}
