import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
      CommonModule,
      BrowserModule,
      RouterModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
