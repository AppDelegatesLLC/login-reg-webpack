# LoginRegWebpack

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.21.

`$ ng new --style=scss --routing login-reg-webpack`


## Font Awesome
`$ npm install --save font-awesome`

Add to styles in angular-cli
`        "../node_modules/font-awesome/css/font-awesome.min.css",`

`npm install --save angular2-fontawesome`

Edit app.module.ts
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

@NgModule({
  ...
  imports: [
    Angular2FontawesomeModule,
  ...
})

Edit app.component.html
`<fa [name]="'id-card'" [size]=3 [border]=true></fa>
 <i class="fa fa-rocket fa-2x"></i>`


## Bootstrap 4 components, powered by Angular 2
`$ npm install --save bootstrap@4.0.0-alpha.5`

Above pulled in jquery and tether, add all to scripts in angular-cli
`
        "../node_modules/jquery/dist/jquery.min.js",
        "../node_modules/tether/dist/js/tether.min.js",
        "../node_modules/bootstrap/dist/js/bootstrap.min.js"
`

`npm install --save @ng-bootstrap/ng-bootstrap`

Edit app.module.ts
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  ...
  imports: [
    NgbModule.forRoot(),
  ...
})

Edit app.component.ts
`import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';`

Edit app.component.html
`<p>Simple datepicker</p>

<ngb-datepicker #dp [(ngModel)]="model" (navigate)="date = $event.next"></ngb-datepicker>

<hr/>

<button class="btn btn-sm btn-outline-primary" (click)="selectToday()">Select Today</button>
<button class="btn btn-sm btn-outline-primary" (click)="dp.navigateTo()">To current month</button>
<button class="btn btn-sm btn-outline-primary" (click)="dp.navigateTo({year: 2013, month: 2})">To Feb 2013</button>

<hr/>

<pre>Month: {{ date.month }}.{{ date.year }}</pre>
<pre>Model: {{ model | json }}</pre>`

`npm install --save moment`

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
