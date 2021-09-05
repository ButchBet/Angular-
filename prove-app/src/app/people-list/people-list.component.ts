import { Component, OnInit } from '@angular/core';
import { Person } from '../people.model';
import { PeopleService } from '../peopleService.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit{
  title = "People listing";

  nameInput: String = "";

  lastNameInput: String = "";

  people: Person[] = [];

  constructor(private peopleService: PeopleService) {

  }

  ngOnInit(): void {
    this.people = this.peopleService.people;
  }
  
  addPerson(event: Event) {
    if(this.nameInput === "" || this.lastNameInput === "") {
      return;
    } else {
      const newPerson = new Person(this.nameInput, this.lastNameInput); 

      this.peopleService.setPerson(newPerson); // Sent a newPerson objec to the PeopleService

      this.nameInput = "", this.lastNameInput = "";  // Vecome thei nput strings as empty values
    }
  }

  personEdit(index: Number) {
    this.peopleService.greet.emit(index);
  }
}
