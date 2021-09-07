import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../peopleService.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private peopleService: PeopleService) {
    this.peopleService.greet.subscribe(
      (input: Number) => {
        alert("The selected person's index is " + input);
      }
    );
  }

  ngOnInit(): void {

  }
}
