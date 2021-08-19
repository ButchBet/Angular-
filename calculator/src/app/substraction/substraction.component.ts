import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.css']
})
export class SubstractionComponent {

  title = "Substraction";

  // Operands
  opA: number = 0;
  opB: number  = 0;

  // Send result to app-component
  @Output() result = new EventEmitter<number>();

  // Calculation the addition and emit it 
  addition() : void {
    const add = this.opA - this.opB;

    this.result.emit(add);
  }
}
