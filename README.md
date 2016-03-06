# react-router-boilerplate
A boilerplate for using React, React-router with Webpack, which is configured for both development and deployment.
Some other really packages are installed, such as:
* Jasmine and Karma, for running tests
* autoprefixer, normalize.css and sass-loader for using and automatically adding vendor prefixes to the .scss files
* React hot loader for hot reloading of React components
* ESlint with the airbnb configuration

# Installation
Clone the project and run:
```
npm install
```

Then use
```
npm run dev
```
to run a development server with hot reloading, or
```
npm deploy
```
to generate the final static files.