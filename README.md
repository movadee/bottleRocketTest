# BottleRocketTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

---

## Project Test Report:

Hello, this is a summary of the work I've done on the test project for the Bottle Rocket. I thought it can be handy to report on completed tasks and to communicate my thought process overall.

##### Outline

This project was created using following technologies: Angular 7, Typescript, ES6

App Initializer is used to call the data from the server. I chose this approach so that user will not see an empty home page while app is waiting for data to arrive from the server. Instead we can show an app loader while we are waiting for data. Only when data (or error) is received the component will start building.

Google maps view was implemented, however need some more work. Controls are visible and styling is not as designs.
This project was tested on the following browsers/devices: Chrome for MacOS && Android Chrome


##### ToDos (as if it was a real life project)

- Code: hack code (marked with ToDo comments) need to be re-written

- Fonts: replace fonts with a licensed version

- Node package: map npm package need further examination (tech debt maybe?) to make sure that it is not affecting app performance

- Map: need to remove controls and style according to designs

- Functional tests

- E2E tests

- HTTP error handling



##### Questions (as if it was a real life project)

- Accessibility question: need to confirm accessibility standards with designers and/or project owner

- i18n question: I assumed that project is not multilingual only for test proj purposes. However, that would be one of my questions

- Data question (!important): Restaurant dataset is missing unique id (primary key). As a temp solution I used restaurant names as a unique identifier, but need to be discussed

- Data question: need access/discuss/confirm data structure and all keys that we might be using in the app

- Design question: the global footer was "removed" programmatically. Do we need to remove or hide the footer?

- Design question (!important): seems like ```Avenir Next``` font require license, therefore need to get license asap. Code can't go to production (I loaded fonts for visual test purposes)

- Design question: need access to project design guidelines so I can prepare sass before actually starting to write component-based styles

- Design question: icon ```ic_webBack@2x.png``` looks too thing in comparison to designs. Can we double check that devs have a correct icon

- Design question: get/setup docs/feedback/smth for animation expectations/guidelines to make sure we have a animations standard, so that all app components had the same animation style

- Optimization question: would need to see a "bigger picture" project overview, but is seems like we can take advantage of a lazy loading approach

- Optimization question: use CDN for assets storage?


---

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
