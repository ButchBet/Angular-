import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent {
  title = "Calculator App"
  
  number: number;

  // Change the number value 
  emitedResult(element: number) {
    this.number = element;
  }
}
  