import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Aws01Service} from './services/aws/aws01.service';

import { AppComponent } from './app.component';
import { Aws01Component } from './components/aws/aws01/aws01.component';

@NgModule({
  declarations: [
    AppComponent,
    Aws01Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [Aws01Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
