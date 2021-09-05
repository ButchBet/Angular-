import { Person } from "./people.model";
import { LogginService } from "./logginService.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class PeopleService {

    people: Person[] = [new Person("Kevin", "Salazar"),
             new Person("Eduar", "Oriz")];

    greet = new EventEmitter<Number>();

    constructor(private logginService: LogginService) {

    }

    getPeople() { 
        return this.people;
    }

    setPerson(person: Person) {
        this.people.unshift(person);

        this.logginService.setMessage("Person " + person.name + " " + person.lastName + " has been added");
    }
}