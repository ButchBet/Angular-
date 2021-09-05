import { Component } from '@angular/core';
import { PeopleService } from './peopleService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  fontSizePx = 16;

  title = 'prove-app';

  love = false;
  
  poison = true;

  constructor(private peopleService: PeopleService) {
    this.peopleService.greet.subscribe(
      (input: Number) => {
        alert("The selected person's index is " + input);
      }
    );
  }

}
