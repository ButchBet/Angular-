import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {
  title = "Addition";

  // Operands
  opA: number = 0;
  opB: number  = 0;

  // Send result to app-component
  @Output() result = new EventEmitter<number>();

  // Calculation the addition and emit it 
  addition() : void {
    const add = this.opA + this.opB;

    this.result.emit(add);
  }
}
