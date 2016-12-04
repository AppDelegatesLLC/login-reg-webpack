import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TrainerLoginComponent } from './login/trainer-login.component';
import { AthleteLoginComponent } from './login/athlete-login.component';

/**
 * Read about guards: http://blog.thoughtram.io/angular/2016/07/18/guards-in-angular-2.html
 * , canActivate: [AuthGuard]
 * @type {({path: string; component: HomeComponent}|{path: string; component: TrainerLoginComponent}|{path: string; component: AthleteLoginComponent}|{path: string; redirectTo: string})[]}
 */
const routes: Routes = [
  //{ path: '', children: [] }
  { path: '', component: HomeComponent },
  { path: 'login/t', component: TrainerLoginComponent },
  { path: 'login/a', component: AthleteLoginComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
