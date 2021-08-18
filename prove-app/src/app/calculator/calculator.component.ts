import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  title = "Calculator App"
  result: Number = 0;
  opA: Number = 0;
  opB: Number  = 0;

  // // Method to catch the submit event. 
  // SubmitEventCatch(event: Event) {
  //   event.preventDefault();

  // // Operator A and B value saving.
  //   let opA = document.getElementById("operandA") as HTMLInputElement,

  //   opB = document.getElementById("operandB") as HTMLInputElement;

  //   // Sending values to calculate and show the result value => (A)
  //   this.calcAddtion(opA.value, opB.value);
  // }


  // // Function to solve (A)
  // calcAddtion(opA: String, opB: String) : void{ 
  //   // Change the addtion result in the html structure
  //   this.result = Number(opA) + Number(opB);
  // }


  // Method to calculation the addtion
  addition() : void {
    this.result = Number(this.opA) + Number(this.opB);
  }

}
  