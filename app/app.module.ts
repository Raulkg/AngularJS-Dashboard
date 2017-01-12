import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MaterialModule} from '@angular/material';
import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule ,  MaterialModule.forRoot(), FormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
