import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputLabelComponent} from "./input-label.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    InputLabelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    InputLabelComponent
  ]
})
export class InputLabelModule { }
