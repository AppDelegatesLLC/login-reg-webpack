import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { , NgbAlert, NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AthleteLoginModule } from './login/athlete-login.module';
import { TrainerLoginModule } from './login/trainer-login.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        //AlertModule,ProgressbarModule,
        Angular2FontawesomeModule,
        HomeModule,
        AthleteLoginModule,
        TrainerLoginModule,
        AppRoutingModule,
        NgbModule.forRoot()
    ],
    providers: [],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
