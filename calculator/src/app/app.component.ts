import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

  result: any;

  // Hidde the current container and show the event container
  changeContainer(element: HTMLImageElement) {
    let alt:string = element.alt;

    const mainContainer = document.getElementById("mainContainer") as HTMLDivElement,

    nextContainer = document.getElementById("nextContainer") as HTMLDivElement, 

    changedTag = document.getElementsByClassName("page"), 

    // To can select a random component
    allComponents: string[] = ["substractionComponent", "additionComponent",
                               "multiplicationComponent", "divisionComponent"];


    // Check if the event represent the random value
    if(alt === "randomComponent") {
      const randomSelection = Math.floor(Math.random() * 4);

      alt = allComponents[randomSelection];
    } 

     // Hide all aff the elements and at the eand show the correct
    for(let i = 0; i < changedTag.length; i++) {
      changedTag[i].classList.add("hidden")

      if(changedTag[i].id === alt) {
        changedTag[i].classList.remove("hidden");
      }
    }

    // Hidde the main and show the next container
    this.showAndHidde(mainContainer, nextContainer);

  }

  showAndHidde(cont1: HTMLDivElement, cont2: HTMLDivElement){
    cont1.classList.add("hidden");

    cont2.classList.remove("hidden");

    this.result = "";
  }

  // Catch the result event (number)
  catchResult(element: number) {
    this.result = element;
  }
}
