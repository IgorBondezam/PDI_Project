import {Component, Input} from '@angular/core';

@Component({
  selector: 'input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.scss']
})
export class InputLabelComponent {

  @Input({ required: true }) labelValue: string;
  @Input({ required: true }) type: 'text' | 'password' | 'email' | 'file' | 'number' | 'checkbox' | 'radio' | 'submit' | 'reset' | 'button' | 'hidden' | 'date' | 'datetime-local' | 'month' | 'range' | 'search' | 'tel' | 'time' | 'url' | 'week';
  // @Input({ required: true }) formControlName: string;
  // @Input() required: boolean = false;


  constructor() {
  }

}
