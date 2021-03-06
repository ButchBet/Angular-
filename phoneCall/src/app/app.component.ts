import { Component } from '@angular/core';
import { Contact } from './contact';
import { CallRegist } from './callRegist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // statusShow
  mainStatus:Boolean = false;

  phoneStatus:Boolean = false; // Control the bachground change
  
  callStatus:Boolean = true; // Control the call component posible show

  firstTime:Boolean = true;
  
  batteryP = 12;

  // control the phone clock
  date = new Date();
  
  hour:Number;
  
  minutes:any;

  // seconds:number;
  
  timer() {
    const date = new Date();
    
    this.hour = this.keepHours(date.getHours());

    this.minutes = this.keepMinutes(date.getMinutes()),

    setTimeout(() => {
      this.timer();
    }, 1000);
  }

  keepHours(date:number) {
    if(date > 12) {
      return date - 12;
    }
    // } else if (date === 0) {
    //   return date + 1;
    // } 

    return date;
  }
  keepMinutes(date:number) {
    if(date < 10) {
      return "0" + date;
    } 

    return date;
  }


  // Control the background power status
  changeBackground(elem1: HTMLDivElement) {
    this.timer();

    if(this.phoneStatus) {
      elem1.classList.add("hidden")
  
      this.phoneStatus = false;
     } else {
      elem1.classList.remove("hidden");
    
      this.phoneStatus = true;
      
      // Allways being showing main component
      if(this.firstTime){
        this.mainStatus = true;

        this.firstTime = false;
      }
     }
    }

   // Go back to the main component interface
   goBack() {
    alert("You are trying to go back")
  }

  mainEventCatch(value: Boolean){
    this.mainStatus = false;

    this.callStatus = true;
  }

  callEventCatch(value: Boolean) {
    console.log("Hello World");
  }
}
