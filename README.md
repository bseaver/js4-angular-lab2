# Angular 2 Basics

## Epicodus JavaScript Week 3 Code Review featuring Angular 2.

## Copyright (c)
* 2017 Dylan Stackhouse, Benjamin T. Seaver

## Known Bugs
* No known bugs

## Support and contact details
* None

## License
* MIT

## Key Objectives
* Application uses a model to organize data.
* Components are used to create display and behavior for your templates.
* TypeScript is used throughout application.
* Users can create and edit instances of a model.
* Models can be filtered using a pipe.

## Summarized User Story
* Form to add food with name calories and details
* View list of foods entered
* Filter foods: All, or Calories over 500
* Click food see edit form

## Software Prerequisites
The following is required to create or use this example.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Angular 2](https://www.npmjs.com/package/angular2-cli)

## Additional Software Utilized
* [Bootstrap](http://getbootstrap.com/)

## Commands used
``` sh
npm install angularfire2 firebase --save
(edit root tsconfig.json (not in src as documented))
```

## Firebase Prerequisites:
* Create your own account on Google Firebase
* Create a project on Firebase for this app, say "album-store"
* Modify the app's database rules as follows:

``` JSON
{
    "rules": {
      ".read": "true",
      ".write": "true"
    }
}
```
* Click Add Firebase to Web app and copy information displayed within the var config = {...} into a new file in the project src/app/api-keys.ts as follows:

  In Project root, create file: src/app/api-keys.ts with

``` js
  export const masterFirebaseConfig = {
    apiKey: "your-apiKey-here",
    authDomain: "your-authDomain-here.firebaseapp.com",
    databaseURL: "https://your-databaseURL-here.firebaseio.com",
    projectId: "your-projectId-here",
    storageBucket: "your-storageBucket-here.appspot.com",
    messagingSenderId: "your-messagingSenderId-here"
  }
```

src/app/api-keys.ts

## Install and run
* See Essential Firebase instructions:
* `git clone <repository-url>` this repository
* `cd <repository-folder>`
* `npm install`
* `bower install`
* `ng serve`
* Open browser to `localhost:4200`

## Angular 2 Generated Architecture with partial file and folder "names"
* Generate Project with Angular 2 CLI (Command line Interface)
  * $ `ng new food`
* Twitter Bootstrap dependancy
  * $ `bower init`
  * $ `bower install bootstrap --save`
  * (Also manually edit angular-cli.json and .gitignore)
* Generate a Model (Class) for "food"
  * $ `ng g class food`
  * (rename src/app/food.ts to src/app/food.model.ts)
* Generate a Component for listing "list-food"
  * $ `ng g component food-list`
* Generate a Component for Adding "new-food"
  * $ `ng g component new-food`
* Generate a Component for Editing "edit-food"
  * $ `ng g component edit-food`
* Generate a Pipe for filtering food "caloric-content"
  * $ `ng g pipe caloric-content`


## Outline of Planned Git Commits
* Generated project
* README.md
* Integrate Twitter Bootstrap styling
* Data model
* Root component with model and seed data
* List component
* Display list of foods
* Build out list display
* Implement food delete
* Add food component
* Integrate Add food component
* Edit food component
* Integrate edit component
* Caloric Content pipe (food filter)
* Integrate Caloric Content pipe


##### End of File



# NewOnlineStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
