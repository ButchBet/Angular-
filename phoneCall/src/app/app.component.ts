import { Component } from '@angular/core';
import { Contact } from './contact';
import { CallRegist } from './callRegist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mainRegist = false;

  title = 'alejandro';

  phoneStatus = false;

  repetition = 1;

  changeWhite = "prove";

  // control the phone clock
  date = new Date();

  hour:number;

  minutes:any;

  // seconds:number;
  
  timer() {
    const date = new Date();
    
    this.hour = this.keepHours(date.getHours());

    this.minutes = this.keepMinutes(date.getMinutes()),

    // this.seconds = date.getSeconds();



    setInterval(() => {
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

  batteryP = 12;

  // Save the contacts data
  public contact: Contact[] = [new Contact("Kevin", "Salazar", 3118818838, "Claro", "k.salazar@utp.edu.co"),
                              new Contact("Alejandro", "Castañeda", 3226118543, "Tigo", "kevinmortal.10@gmail.com"),
                              new Contact("Karem", "Londoño", 3178516045, "Movistar", "k.londono@utp.edu.co"),
                              new Contact("Luz", "Salazar", 3226464578, "Claro", "andrasalazar0008@gmail.com"),
                              new Contact("Alejandro", "Vergara", 3135036412, "Claro", "alejo.vergara@utp.edu.co"),
                              new Contact("Mileth", "Gordillo", 3225370674, "Claro", "mileth.gordillo@utp.edu.co"),
                              new Contact("Eduar", "Ortiz", 3145293894, "Claro", "gaia.ortiz@utp.edu.co")];


  // Save the call regist
  // Status reffer to declinedRemote:0, declinenRemote: 1, catchedLocal: 2, 
  // catchedRemote: 3
  public callRegist: CallRegist[] = [new CallRegist(3118818838, "Thu", "Claro", "Colombia", 0),
                                     new CallRegist(3015794422, "Mon", "Tigo", "Colombia", 2), 
                                     new CallRegist(3015797422, "Thu", "Movistar", "Colombia", 1),
                                     new CallRegist(3226115798, "Fri", "Claro", "Colombia", 3),
                                     new CallRegist(3178516045, "Mon", "Claro", "Colombia", 0),
                                     new CallRegist(3145293894, "Whd", "Claro", "Claro", 0),
                                     new CallRegist(3225370674, "Thr", "Claro", "Colombia", 3)];

  // Control the background power status
  changeBackground(elem1: HTMLDivElement, elem2: HTMLDivElement) {
    this.timer();

    if(this.repetition != 1) { // This is a prove, void it 

      alert("Please whait the is turning on");
    } else { // Here begins the code 
    if(this.phoneStatus === false) {
      this.mainRegist = true;

      elem1.classList.remove("hidden");
  
      // setTimeout(() => {
      //   elem2.classList.remove("hidden");
  
      //   elem1.classList.add("hidden");

      //   this.repetition = 1;
      // }, 3000);
  
      // this.repetition = 2;
    
      this.phoneStatus = true;

     } else {
       elem2.classList.add("hidden");
  
  
       elem1.classList.add("hidden")
  
       this.phoneStatus = false;
     }
    }
   }
  
}
