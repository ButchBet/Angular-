import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { ResultComponent } from './calculator/result/result.component';
import { ObtainComponent } from './calculator/obtain/obtain.component';
<<<<<<< HEAD
import { SizerComponent } from './sizer/sizer.component';
=======
>>>>>>> 842bad682dd0da17ba0270fa526cd59ef278857d

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    PeopleListComponent,
    ResultComponent,
<<<<<<< HEAD
    ObtainComponent,
    SizerComponent
=======
    ObtainComponent
>>>>>>> 842bad682dd0da17ba0270fa526cd59ef278857d
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
