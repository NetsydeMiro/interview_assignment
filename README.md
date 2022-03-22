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
- [Toast UI Calendar]: JavaScript calendar component (and its React wrapper).
- [React Datepicker]: date selector control. 
- [Bulma]: sass & css framework.
- [Sass]: syntax script that compiles to css. 

[Node.js]: https://nodejs.org/en/
[TypeScript]: https://www.typescriptlang.org/
[Create React App]: https://create-react-app.dev/
[React]: https://reactjs.org/
[React Router]: https://reactrouter.com/
[Jest]: https://jestjs.io/
[React Datepicker]: https://reactdatepicker.com/
[Bulma]: https://bulma.io/
[Sass]: https://sass-lang.com/

[nvm]: https://github.com/nvm-sh/nvm
[nvm-windows]: https://github.com/coreybutler/nvm-windows

The following information is from the default README that comes generated as part of a [Create React App] project.  
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
