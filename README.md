This project consists on a React/Redux implementation of a Social Media Jumbotron scroller.

It is architected around the [TINT](https://www.tintup.com/) Social Media Aggregator API by default.

The project base is [Create React App](https://github.com/facebookincubator/create-react-app).

## Use cases.

The project was built around the idea of the halftime period in a soccer match. Just as the other sports, whenever there is dead time, the screens that are present in a contemporary stadium either show ads or information associated to the home team. Tho this end, the idea is to set up a hashtag in whatever social network you might like (hashtag permitting) let the audience send messages using it, and then curate and show these messages in jumbotron mode on the stadium screens. Definitely not a new idea, I am pretty sure this exists, but a nice idea to develop as a short exercise with the TINT API.

## To Do.

- Implement Lazy Loading for images.
- Add variety to the animations.
- Detach the CSS form the react components and pass as configuration.
- Generating config from a client dashboard? (not a front end exercise solely).

## Prerequisites

You need [Node.js & NPM](https://nodejs.org)

## Set up local environment

- Clone this repo.
- cd repo folder
- npm install
- npm start

## Hosted at Firebase

The project has some Firebase specific files that indicate where to deploy (.firebaserc) and how to deploy (firebasse.json).
If you know what you are doing then edit those. You can always just transfer the contents of the build directory to the server of your preference to have a production instance. Check how to do a production build [here](#npm-run-build).

In order to deploy to Firebase Hosting follow these steps in the node console:

`npm install -g firebase-tools`
`firebase init`
`firebase deploy`

Check the [Firebase Hosting documentation](https://firebase.google.com/docs/hosting/) to learn more about it


## Create React App commands

- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
