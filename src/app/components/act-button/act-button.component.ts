import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'act-button',
  templateUrl: './act-button.component.html',
  styleUrls: ['./act-button.component.scss']
})
export class ActButtonComponent {

  @Input({required: true}) typeButton: 'button-positive' | 'button-negative' | 'button-neutral';
  @Input({required: true}) value: string;
  @Output() clickAct: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  onClickAct(){
    this.clickAct.emit();
  }

}
