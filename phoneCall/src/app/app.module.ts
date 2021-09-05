import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MarkComponent } from './mark/mark.component';
import { OperatorComponent } from './operator/operator.component';
import { CallComponent } from './call/call.component';
import { CallRegistService } from './callRegistService.service';
import { ContactService } from './contactServeice.service';
import { StatusService } from './statusService.service';
import { MovilDataService } from './movilDataService.service';
import { MainMethodsService } from './mainMethodsService.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MarkComponent,
    OperatorComponent,
    CallComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CallRegistService,
              ContactService,
              StatusService,
              MovilDataService,
              MainMethodsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
