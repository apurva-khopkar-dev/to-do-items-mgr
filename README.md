# To Do Items Manager

To Do Items Manager is a free and handy application to manage your everyday to do items.

# Features

  - Add items to your to do list
  - Edit items from your to do list, change their priorities
  - Delete items

You can also:
  - Perform inline editing in to do items list

### Tech

To Do Items Manager uses a number of open source projects to work properly:

* [Angular] - HTML enhanced for web apps!
* [Angular Material] - UI themes
* [Angular CLI] - interface for commands for development 
* [Node.js] - JS based server for the backend
* [Express] - Middleware for Node.js
* [npm] - Standard package manager in Node.js

And of course To Do Items Manager itself is open source with a [public repository][dill] on GitHub.

### Installation

#### Pre requisites
Node JS (v14.4.0). Check using
```sh
$ node --version
```
npm package manager (6.14.5). Check using
```sh
$ npm -v
```
Angular CLI (10.0.1). Check using
```sh
$ ng version
```
Git CLI or any other Git tool to clone [public repository] [clone] on GitHub.

Install the dependencies and devDependencies and start the server.

```sh
$ cd to-do-list
$ npm install
$ npm install cors
```
## Run the Node JS server
```sh
$ cd <path to to-do-list-apis.js>
$ node to-do-apis.js
```
You should get `To do list node App is listening on port 3000`

## Run the application

Run `ng serve` from cloned project directory `to-do-list`. 
```sh
$ cd to-do-list
$ ng serve
```
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. You can also provide a custom free port number if default port `4200` is busy.
Example, `ng serve --port 4201`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Demo
![](Apurva Khopkar_to_do_list.mp4)


   [dill]: <https://github.com/apurva-khopkar-dev/to-do-items-mgr>
   [clone]: <https://github.com/apurva-khopkar-dev/to-do-items-mgr.git>
   [node.js]: <https://nodejs.org/en/download/>
   [Express]: <http://expressjs.com>
   [Angular]: <http://angularjs.org>
   [npm]: <https://nodejs.org/en/download/>
   [Angular Material]: <https://material.angular.io/>
   [Angular CLI]: <https://angular.io/>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
