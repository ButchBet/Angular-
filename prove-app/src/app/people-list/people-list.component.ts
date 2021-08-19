import { Component, Input, OnInit } from '@angular/core';
import { Person } from './people.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  title = "People listing";

  nameInput: String = "";

  lastNameInput: String = "";

  alert: String = ""

  people: Person[] = [new Person("Kevin", "Salazar"),
                      new Person("Eduar", "Oriz")];
  
  
  addPerson(event: Event) {
    if(this.nameInput === "" || this.lastNameInput === "") {
      return;
    } else {
      const newPerson = new Person(this.nameInput, this.lastNameInput);

      this.people.push(newPerson);

      this.nameInput = "", this.lastNameInput = "";
    }
  }

  @Input() poison: Boolean = true;
  @Input() love: Boolean = false;

  checkPoisonOrLove() {
    if(this.poison) {
      console.log("Poison is: " + this.poison)
    }

    if(this.love) {
      console.log("Love is: " + this.love)
    }
  }
}
