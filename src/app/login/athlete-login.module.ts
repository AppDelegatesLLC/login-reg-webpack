import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AthleteLoginComponent } from './athlete-login.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  declarations: [AthleteLoginComponent],
  exports: [AthleteLoginComponent]

})
export class AthleteLoginModule { }
