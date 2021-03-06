import { Component, EventEmitter, Output } from '@angular/core';
import { CallRegistService } from '../callRegistService.service';
import { CallRegist } from '../callRegist';
import { MainMethodsService } from '../mainMethodsService.service';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent {

  constructor(private callRegistService: CallRegistService, private mainMethodsService: MainMethodsService){}
  
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

  // Remove the last number of the input
  removeNumber(element: HTMLParagraphElement) {
    this.numberCount--;

    if(element.innerHTML != "") {

      // Get the paragraph value
      let number = element.innerHTML, newNumber: number;

      // Remove the space
      number = this.mainMethodsService.removeSpace(number);

      // Parse it to number
      newNumber = parseInt(number);

      // Remove the last digit
      newNumber /= 10;

      // Obtein the integer number
      newNumber = Math.floor(newNumber);

    
      // Asign the space
      const finalNumber = this.mainMethodsService.asignSpace(newNumber.toString());

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

    number = this.mainMethodsService.removeSpace(number);


    if(number === "") {
      regist = this.callRegistService.getCall()[0];

      this.callRegistService.setCall(regist);

      let newNumber = regist.number;

      element.innerHTML = this.mainMethodsService.asignSpace(newNumber.toString());
      
      // Wait 1 second to cand show the selected number inside the input place
      setTimeout(()=> {
        this.markEvent.emit(true)
      }, 1000);
    } else {
      regist = new CallRegist(parseInt(number), "", "", "Colombia", -1)

      this.callRegistService.setCall(regist);
      
      this.markEvent.emit(true);
    }
  }
}
