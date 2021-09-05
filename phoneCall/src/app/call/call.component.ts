import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CallRegistService } from '../callRegistService.service';
import { ContactService } from '../contactServeice.service';
import { MainMethodsService } from '../mainMethodsService.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {

  logo:String; // concatenate the first letter of the name or an O in case of the an unknown number

  identifier:String; // Identify the operator

  callOperator:String; // Concatenate the operator from call regist 

  phoneReference:String = "Mobile"; // By now mobile
  
  phoneNumber:String; // Concatenate the phone number from call regist 

  space:String = " "; // I don't remember

  timer:String = "0:0" // To time the call

  seconds = 0;

  minutes = 0; // To go changing the minute timer

  color: string[] = ["firstColor", "secodColor", "thirdColor", "fourthColor", "fifthColor", "sixthColor", "seventColor"]; // Colors fo the logo background
  
  constructor(private callRegistService: CallRegistService, private contactService: ContactService,
              private mainMethodsService: MainMethodsService) { }

  ngOnInit(): void {
    let logo = document.getElementById("logo") as HTMLDivElement,

    i = Math.floor(Math.random() * 7); // Generate random integer number as index

    logo.classList.add(this.color[i]); // Set the background color with that index

    let call = this.callRegistService.getCall()[0]; // Get the last call regist

    this.callOperator = call.operator.toUpperCase(); // Changing the current operator for call value

    // Get the operator text and add the respective color
    const callOperatorText = document.getElementById("callOperatorText");

    // First we have to remove the posible last class
    callOperatorText?.classList.remove("movistar"),

    callOperatorText?.classList.remove("claro")

    callOperatorText?.classList.remove("tigo");

    callOperatorText?.classList.add(call.operator.toLowerCase());

    this.phoneNumber = this.mainMethodsService.asignSpace(call.number.toString()) // Changing phone number for call number

    this.identifier = this.phoneNumber; // The main case for the identifier (then number)
    
    this.logo = "O"// The main value to logo

    // Check if the contact exist or not
    this.contactService.getContact().forEach((contact) => {
      if(contact.phone === call.number) { // Just change at this case the number to a name, and logo change for the main letter of the name
        this.identifier = contact.name;

        this.logo = contact.name.charAt(0);
      }
    });

    // Change timer for Calling... with a phone tone as background
    this.timer = "Calling...";
    // TODO: Here we have to add a background sound to cand simulate the call

    // TODO: Then affter 4 seconds he is goind to change to a positive voice or the voice buzon

    // Concatenate the main calue to the second second
    setTimeout(() =>{
      this.timer = this.minutes + ":" + this.seconds;
      //TODO: here you have to begin the voice conversation, also make a random method that return a voidce of 
      // positive answer or negative answer

      // Repeat the second addition every second 
      setInterval(() => {
        this.seconds++; 

        if(this.seconds === 60) {
          this.minutes++;

          this.seconds = 1;
        } 

        this.timer = this.minutes + ":" + this.seconds;
      }, 1000);
    }, 2000);
  }

  @Input() callStatus: Boolean;

  @Output() callEvent = new EventEmitter<Boolean>();
}
