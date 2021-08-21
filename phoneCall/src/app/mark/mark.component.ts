import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.css']
})
export class MarkComponent extends AppComponent{

  contacts  = this.contact;

  showContacts() {
    this.contact.forEach(element => {
      console.log(element.name + " " + element.lastName + " " + element.phone + " " + element.email + " " + element.operator)
    })
  }

}
