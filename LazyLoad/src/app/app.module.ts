import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Main routes
import { AppRotingModule } from './app-roting.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRotingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
