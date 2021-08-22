import { Component, Input } from '@angular/core';
import { Contact } from '../contact'
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent extends AppComponent{

  color: string[] = ["red", "yellow", "blue", "gold", "pink", "grey", "orange"];

  @Input() statusShow: Boolean;
 
  prove(event: HTMLImageElement) {
    // alert("Hello World")
  }

  showRegists() {
    this.statusShow = false;

    // Generate the regist history
    this.callRegist.forEach(element => {
      // Check if the number is registred 
      let name: string = "";
      
      // Random number to specificate the backgorund to the subLeftContent division
      const color = Math.floor(Math.random() * 7);



      this.contact.forEach(value => {
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
      });
  }

}
