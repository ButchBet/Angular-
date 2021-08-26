import { Component, EventEmitter, Output } from '@angular/core';
import { CallRegistService } from '../callRegistService.service';
import { CallRegist } from '../callRegist';
import { parse } from 'cookie';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent {

  constructor(private callRegistService: CallRegistService){

  }
  
  optionStatus = false;

  @Output() markEvent = new EventEmitter<Boolean>();

  // To count the entered number, to introduce a space at brefore the 4 or after the third digit
  numberCount = 0;

  showOption() {
    const options = document.getElementById("options");

    if(this.optionStatus) {
      options?.classList.add("hidden");

      this.optionStatus = false;
    } else {
     options?.classList.remove("hidden");

     this.optionStatus = true;
    }
  }

  // Remove the space that always has the number ex: 322 6990080 -> 3226990080
  removeSpace(number: string): any {
    let finalString: string ="";
    
    for(let i = 0; i < number.length; i++) {
      if(number[i] === " "){
        continue;
      } else {
        finalString += number[i];
      }
    }

    return finalString;
  }

  // Asign one space to a number
  asignSpace(newNumber: string): any {
    let number = "";

    for(let i = 0; i < newNumber.length; i++){
      if(i  === 3) {
        number += " " + newNumber[i];
      } else {
        number += newNumber[i];
      }
    }

    return number;
  }

  // Remove the last number of the input
  removeNumber(element: HTMLParagraphElement) {
    this.numberCount--;

    if(element.innerHTML != "") {

      // Get the paragraph value
      let number = element.innerHTML, newNumber: number;

      // Remove the space
      number = this.removeSpace(number);

      // Parse it to number
      newNumber = parseInt(number);

      // Remove the last digit
      newNumber /= 10;

      // Obtein the integer number
      newNumber = Math.floor(newNumber);
    
      // Asign the space
      const finalNumber = this.asignSpace(newNumber.toString());

      // change the value into the paragraph
      if(newNumber === 0) {
        element.innerHTML = "";

        this.numberCount = 0;
      } else {
        element.innerHTML = finalNumber;
      }
    }
  }

  // Detect the number clicked
  detectNumber(number: HTMLDivElement, element: HTMLParagraphElement) {

    // You can also use the .lenght property as conditionals parameters but i think is better thus
    if(this.numberCount < 10) {
      if(this.numberCount === 3) {
        element.innerHTML += " " + number.innerHTML;
      } else {
        element.innerHTML += number.innerHTML;
      }

      this.numberCount++;
    }
  }

  // To make the call 
  calling(element: HTMLParagraphElement) {
    let number = element.innerHTML, 
    
    regist: CallRegist;

    number = this.removeSpace(number);


    if(number === "") {
      regist = this.callRegistService.getCall()[0];

      this.callRegistService.setCall(regist);
    } else {
      regist = new CallRegist(parseInt(number), "", "", "Colombia", -1)

      this.callRegistService.setCall(regist);
    }

    this.markEvent.emit(true);
  }
}
