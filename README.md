# React-redux security breaches app

## Starting the project

In the project directory, run:
### `yarn install`
to install all the dependencies

### `yarn start`
to run the page

This project uses React, Redux and Material-UI

It is hosted on GitHub Pages

[link to the App](https://maciejszcz.github.io/redux-breaches-app/)



## The app is also configured to run inside a Docker container (both development and production)

### `docker build -t my-react-app-dev -f Dockerfile.dev .`

to build an image with the development version of the project

### `docker run -p 3000:3000 my-react-app-dev`

to run the container with the development version

### `docker build -t my-react-app .`

to build an image with the production version of the react project

### `docker run -p 80:80 my-react-app`

to run the container with the production build


[![Build Status](https://travis-ci.com/maciejSzcz/redux-breaches-app.svg?branch=master)](https://travis-ci.com/maciejSzcz/redux-breaches-app)