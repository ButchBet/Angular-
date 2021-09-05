import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { ResultComponent } from './calculator/result/result.component';
import { ObtainComponent } from './calculator/obtain/obtain.component';
import { SizerComponent } from './sizer/sizer.component';
import { PeopleService } from './peopleService.service';
import { LogginService } from './logginService.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    PeopleListComponent,
    ResultComponent,
    ObtainComponent,
    SizerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PeopleService,
              LogginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
