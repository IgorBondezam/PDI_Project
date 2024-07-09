import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActButtonComponent} from "./act-button.component";

@NgModule({
  declarations: [
    ActButtonComponent
  ],
  exports: [
    ActButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ActButtonModule { }
