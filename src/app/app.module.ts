import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [AppComponent, Test1Component, FormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
