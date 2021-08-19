import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MarkComponent } from './mark/mark.component';
import { OperatorComponent } from './operator/operator.component';
import { CallComponent } from './call/call.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
