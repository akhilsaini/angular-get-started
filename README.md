# AngularGetStarted

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

<details>
<summary>Chapter 1 : Components</summary>

[Follow Link](https://www.barbarianmeetscoding.com/blog/2016/03/25/getting-started-with-angular-2-step-by-step-1-your-first-component/)

- ng new -> To create the new project,multiple options available
- ng server -> To start the application,multiple options available
- index.html -> Entry point for the application
- app-root -> Custom tag in html
- webpack -> Browser independent module bundler for the application
- src/main.ts -> Bootstrapper of the application like the ng-app in angular1.x
- Module -> Group of component. Usually for a feature
- src/app.module.ts -> Main module(app module) initializer
- NgModule -> Decorator which let us declare all the dependencies and component of our application without the need to it on a per-component basis
- Component -> Reusable piece of UI,usually depicted by the custom tag, AppComponent : Root component
- ng generate interface person -> To define the interface like thing. Shorthand is : ng g i person
- ng generate component --inline-template people-list -> Generate the component with inline template. Short hand is : ng g c -it people-list

</details>


<details>
<summary>Chapter 2 : Services and Dependency Injection</summary>

[Follow Link](https://www.barbarianmeetscoding.com/blog/2016/03/26/getting-started-with-angular-2-step-by-step-2-refactoring-to-services/)

- ng generate service people -> Generates the people service. ng g s people(shorthand form)
- Service inclusion in component -> Use service in component using Dependency Injection
- Error till now -> Because No provider for PeopleService! (PeopleListComponent -> PeopleService)
- Register service with angular 2 -> Use the providers property of the component in which this service is supposed to be used
- Register service at the module level -> user NgModule decorator of AppModule
- Register service using angular-cli -> angular-cli helps registering service with specific module
- ngOnInit -> Instead of placing the people code in constructor place it in the ngOnInit. It'll make the constructor more leaner
- DI in service -> This is service with in another service. Use constructor after importing the other service

</details>

<details>
<summary>Chapter 3 : Component and Data Binding</summary>

[Follow Link](https://www.barbarianmeetscoding.com/blog/2016/03/27/getting-started-with-angular-2-step-by-step-3-your-second-component-and-angular-2-data-binding/)


</details>

<details>
<summary>Chapter 4 : Routing</summary>

[Follow Link](https://www.barbarianmeetscoding.com/blog/2016/03/28/getting-started-with-angular-2-step-by-step-4-routing/)

- For routing to work you'll need **@angular/router** module as that's not included in **@angular/core**
- You need to have **routes** config array which specify the path and specific component.
- Export that routes array with **RouterModule**'s **forRoot** method by passing that **routes** array as argument.
- Import that exported **RouterModule** in **app.module.ts** and put in imports array of **@NgModule** decorator
- Add the custom tag **router-outlet** in the **app.component.html**
- Add **<base href="/">** in the **head** tag of **index.html**
- To create the routing link use the **[routerLink]** directive that helps you generate links
- To extract params from routes you need **ActivatedRoute** service from the **@angular/router** module and inject that service in the component's constructor
- **ActivatedRoute** returns a **params** property which returns the subscribe decorator pattern which can help get route param. Do this on **ngOnInit** method(hook).
- To keep the component light you can unsubscribe that decorator in the **ngOnDestroy** method(hook)
</details>