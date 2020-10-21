# Carbookingsystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Flow of application.

User opens application and he/she will be redirected to homepage.
In homepage , user has to click on button "Select Services" in order to view the list of services. On clicking the button , a block with the list of services will open on the right side.

User can select any service and click on continue. On clicking of continue, modal for confirming the service selection and then on clicking of OK , user will be redirected to the carsize page.

On the carsize page, list of cars will be displayed which user can select and click on continue. As mentioned above, modal will come for confirming the selection and then on click of OK , user will get redirected to the final page containing list of all services selected and the total price.

Note : In both homepage and carsize, if user does not select any option and click on continue, error message will appear on top of the page.
