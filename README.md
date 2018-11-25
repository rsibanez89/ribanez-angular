# ribanez
My personal website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

* Run `ng new ribanez --routing --style=scss --prefix=ri`

  * --routing: will add routing to the project
  * --style=scss: will change default styling to be scss
  * --prefix=ri: will do all new components to be prefixed ri

  * Run `ng add ng-zorro-antd --i18n=en_US`

## Development server

* Run `npm install`
* Run `ng serve`. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

* Run `ng generate component component-name` to generate a new component. 
* Run `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Build for deployment

* Run `ng build --configuration=production` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deploy to S3

 * Run `aws s3 cp ./dist/ribanez s3://ribanez --recursive`
 * Run `aws s3 cp ./dist/ribanez s3://ribanez --recursive --exclude "assets/*" --include "assets/img/*"`
 * Run `aws s3 cp ./dist/ribanez s3://ribanez --recursive --exclude "*" --include "runtime.06daa30a2963fa413676.js"`
 * Go to http://ribanez.s3-website.us-east-2.amazonaws.com