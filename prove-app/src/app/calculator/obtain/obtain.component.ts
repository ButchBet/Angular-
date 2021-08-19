import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-obtain',
  templateUrl: './obtain.component.html',
  styleUrls: ['./obtain.component.css']
})
export class ObtainComponent {

  // Operands
  opA: number = 0;
  opB: number  = 0;

  // Send result to app-calculator
  @Output() result = new EventEmitter<number>();

  // Calculation the addition and emit it 
  addition() : void {
    const add = this.opA + this.opB;

    this.result.emit(add);
  }

}
