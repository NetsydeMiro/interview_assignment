# Interview Assignment

Assignment instructions can be found in [INSTRUCTIONS.md](./INSTRUCTIONS.md).

The rest of this README has technical instructions for getting the program up and running in case you aren't familiar with some of the technologies in use. 

## First Run

When first running the project, you will need to install its dependencies.  In a console and from this directory, run:  

`npm install`

If you don't have [Node.js] installed, or receive any odd errors, you may need to install a specific version of the runtime.  

Use [nvm] (or [nvm-windows] if using a windows machine) to update and manage your [Node.js] version if you require multiple instances of the runtime for different projects.  This project was originally created with Node.js version 16.13.1.

## Development 

During development, any source code changes will automatically be pushed to the development server and deployed to the running app.  

To start the application in development mode, run: 

`npm start`

The app will start up in your default browser (likely at localhost:3000), and allow you to debug via its native development tools. 

Alternately, you can use a code editor or integrated development environment if you prefer. 

## Styling

[Bulma] was used to get a rapid mobile-ready prototype up and running.  Sass variables can be used to override Bulma defaults in the main scss file: [index.scss](./src/index.scss).  Default [Bulma] variables are well documented on the [documentation section of its website](https://bulma.io/documentation/).

Fine tuning of individual pages and components can be done in dedicated scss files so that styles can be easily found and edited, and won't collide with styles defined elsewhere.  An example of this is [CollectionItemTable.scss](./src/components/CollectionItemTable.scss) for the [CollectionItemTable.tsx](./src/components/CollectionItemTable.tsx) component. 

## Testing

To execute jest unit tests, run: 

`npm test`

Tests can be written in a style similar to the one in use in [Home.test.tsx](./src/pages/Home.test.tsx)

## Technologies Used

- [Node.js]: JavaScript runtime environment. 
- [TypeScript]: strongly typed language that compiles to JavaScript.
- [Create React App]: app scaffolding and build tool. 
- [React]: reactive front-end JavaScript framework. 
- [Jest]: popular testing framework for React components
- [Bulma]: sass & css framework.
- [Sass]: syntax script that compiles to css. 

[Node.js]: https://nodejs.org/en/
[TypeScript]: https://www.typescriptlang.org/
[Create React App]: https://create-react-app.dev/
[React]: https://reactjs.org/
[React Router]: https://reactrouter.com/
[Jest]: https://jestjs.io/
[Bulma]: https://bulma.io/
[Sass]: https://sass-lang.com/

[nvm]: https://github.com/nvm-sh/nvm
[nvm-windows]: https://github.com/coreybutler/nvm-windows
