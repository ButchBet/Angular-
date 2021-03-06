import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../contact';
import { CallRegist } from '../callRegist';
import { AppComponent } from '../app.component';
import { CallRegistService } from '../callRegistService.service';
import { ContactService } from '../contactServeice.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit{

  callRegistData: CallRegist[] = [];

  contactData: Contact[] = [];
  
  markStatus = false;

  operatorStatus = false;

  markHidden = false;

  colorIndex = 0;

  color: string[] = ["#5d8aa8", "#efdecd", "#ffbf00", "#9966cc", "#cd9575", "#915c83", "#a52a2a"];
  
  @Output() mainEvent = new EventEmitter<Boolean>();

  constructor(private callRegistService: CallRegistService, private contactService: ContactService){

  }

  ngOnInit(): void {
    this.callRegistData = this.callRegistService.getCall();

    this.contactData = this.contactService.getContact();

    // Generate the regist history
    this.callRegistData.forEach(element => {
      // Check if the number is registred 
      let name: string = "";

      this.contactData.forEach(value => {
        if(element.number === value.phone) {
          name = value.name;
        }
      });

      // Variables to crate the contact structure
      let  contacts = document.getElementById("contacts") as HTMLDivElement,

      contact = document.createElement("div"),

      leftContent = document.createElement("div"),

      left1 = document.createElement("div"),

      left2 = document.createElement("div"),

      span1 = document.createElement("span"),

      status = document.createElement("div"),

      statusIcon = document.createElement("img"),

      span2 = document.createElement("span"),

      span3 = document.createElement("span"),

      phoneContent = document.createElement("div"),

      phoneIcon = document.createElement("img"),

      ngcontent = contacts.attributes[0].name;

      // add the _ngcontent-nxu-c13 attr
      contact.setAttribute(ngcontent, "");

      leftContent.setAttribute(ngcontent, "");

      left1.setAttribute(ngcontent, "");

      left2.setAttribute(ngcontent, "");

      span1.setAttribute(ngcontent, "");

      status.setAttribute(ngcontent, "");

      statusIcon.setAttribute(ngcontent, "");

      span2.setAttribute(ngcontent, "");

      span3.setAttribute(ngcontent, "");

      phoneContent.setAttribute(ngcontent, "");

      phoneIcon.setAttribute(ngcontent, "");
      
      // Check if the name has been filled or not
      if(name != "") {
        left1.innerHTML = name.charAt(0);

        span1.innerHTML = name;
      } else {
        left1.innerHTML = "O";

        span1.innerHTML = element.number.toString();
      }
      
      left1.style.background = this.color[this.colorIndex];

      // increment or become this.colorIndex to 0
      if(this.colorIndex === 6) {
        this.colorIndex = 0;
      } else {
        this.colorIndex++;
      }

      span1.classList.add("span1")

      statusIcon.classList.add("statusIcon");

      // Check to decide which icon to use 
      if(element.status === 0) { // declinedLocal
        statusIcon.src = "../../assets/left-down.svg";
      } else if(element.status === 1) { //declinenRemote
        statusIcon.src = "../../assets/right-up.svg";
      } else if(element.status === 2) { // catchedLocal
        statusIcon.src = "../../assets/left-down.svg";
      } else if(element.status === 3) { // catchedRemote
        statusIcon.src = "../../assets/right-up.svg";
      }

      span2.classList.add("span2");

      span2.innerHTML = element.source + " " + element.date;

      status.appendChild(statusIcon);

      status.appendChild(span2);

      status.classList.add("status");
      
      span3.classList.add(element.operator.toLowerCase());

      span3.innerHTML = element.operator;

      left2.classList.add("left2");

      left2.classList.add("subLeftContent");

      left2.appendChild(span1);

      left2.appendChild(status);
      
      left2.appendChild(span3);

      left1.classList.add("left1")

      left1.classList.add("subLeftContent");

      leftContent.classList.add("leftContent");

      leftContent.appendChild(left1);

      leftContent.appendChild(left2);

      phoneIcon.classList.add("phoneIcon");

      phoneIcon.src = "../../assets/phone.svg";

      phoneIcon.alt = "phoneContent";

      phoneContent.classList.add("phoneContent");

      phoneContent.appendChild(phoneIcon);

      contact.classList.add("contact");

      contact.appendChild(leftContent);

      contact.appendChild(phoneContent);

      contacts.appendChild(contact);

      // this.statusShowFalse.emit(false);
      });
  }
 
  // Change to the number marking component
  markDisplay(event: HTMLImageElement) {
    // Check that the mark componnent has been closes 
    if(this.markHidden) {
      // Hide the operator component
      this.operatorStatus = false;
    }
    let searching = document.getElementById("searching"),

    keyPad = document.getElementById("keyPad"),

    mainOptions = document.getElementById("mainOptions"),

    contacts = document.getElementById("contacts");

    // Make visible the markComponent
    this.markStatus = true;

    // Hidde the searching, keyPad anmd options divisions
    searching?.classList.add("hidden"), 

    keyPad?.classList.add("hidden"),

    mainOptions?.classList.add("hidden");

    // Make contacts container shorter
    contacts?.classList.add("changeHeignt");
  }

  markEventCatch(value: Boolean) {
    // Make call component visible
    this.operatorStatus = true;

    const searching = document.getElementById("searching"),

    contacts = document.getElementById("contacts"),

    // markComponent = document.getElementById("markComponent"),

    keyPad = document.getElementById("keyPad"),

    mainOptions = document.getElementById("mainOptions");

    // Make visible searching, keypad and options divisions
    searching?.classList.remove("hidden"),

    keyPad?.classList.remove("hidden"),

    mainOptions?.classList.remove("hidden");

    // Make opacer the searching, constacts and opstions divisions
    searching?.classList.add("opac"),

    contacts?.classList.add("opac"),

    mainOptions?.classList.add("opac2");

    // Remove the changeHeignt class from contacts 
    contacts?.classList.remove("changeHeignt");

    // Make the markHidden variable true, to when user click again the keyPad
    this.markHidden = true;

    // Hidde the mark component 
    this.markStatus = false;
  }

  callEventCatch(value: Boolean) {
    // Remove the opac property from searching, contacts and mainOptions
    const searching = document.getElementById("searching"),

    contacts = document.getElementById("contacts"),

    keyPad = document.getElementById("keyPad"),

    mainOptions = document.getElementById("mainOptions");

    searching?.classList.remove("opac"),

    keyPad?.classList.remove("opac"),

    mainOptions?.classList.remove("opac");

    contacts?.classList.remove("opac")

    // Emit event to can change to the call component 
    this.mainEvent.emit(true);
  }
}
