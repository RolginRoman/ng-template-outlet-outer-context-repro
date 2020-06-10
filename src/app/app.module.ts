import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, NewComponent, ParentDirective } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ParentDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
