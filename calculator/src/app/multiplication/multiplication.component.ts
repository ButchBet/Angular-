import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiplication',
  templateUrl: './multiplication.component.html',
  styleUrls: ['./multiplication.component.css']
})
export class MultiplicationComponent {

  title = "Multipication";

  // Operands
  opA: number = 0;
  opB: number  = 0;

  // Send result to app-component
  @Output() result = new EventEmitter<number>();

  // Calculation the addition and emit it 
  addition() : void {
    const add = this.opA * this.opB;

    this.result.emit(add);
  }

}
