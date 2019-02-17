# heroku-angular7-template

## About

The purpose of this project is to provide a template that can be easily deployed to Heroku.
I created this project so that people can easily create Heroku applications using Angular
as its front-end framework. It would make development a lot easier and it would save a lot
of time.


This application uses Express and NodeJS as its backend and Angular 7 as the front-end
framework. It would be very beneficial if you study the structure of the code.

## Running the Project

1. Install Dependencies in the back-end by typing `npm install`.
2. Inside your `/frontend` directory, install dependencies by typing `npm install`.
3. Inside your `/frontend` directory, build the project `ng build --prod`.
4. From the root folder, run your project using `npm start`. You can see the page through
`localhost:8080`.

*Note*: Unless you figure out how to enable cors to allow communication between port `4200` and 
`8080`, you will have to keep rebuilding the project for testing when using this template instead
of using `ng serve`. This is because both the front-end and the back-end are merged into a single
application after you build the frontend.

## Deploying to Heroku

Go to [this link](https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app) to
learn how to deploy your app. **Please remember to build your frontend before deploying it!**
