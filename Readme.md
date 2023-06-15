# Cypress Test with Typescript

The frontend test was done using the framework Cypress with Javascript, testing an application in production called [medium.com](https://www.saucedemo.com/).

The api test was done using the framework Cypress with Javascript, testing an application built in Go called [Public API for Public APIs](https://api.publicapis.org/). You can find the repository here https://github.com/davemachado/public-api

In our cypress tests, we have user de library [cypress-map](https://github.com/bahmutov/cypress-map) to help managing our jquery elements and make retryable assertions using queries commands from Cypress version 12.

I also have user the library [cy-spok](https://www.npmjs.com/package/@faker-js/faker) to have a better assertion on json objects like the ones returned from requests

And I used [cy-api](https://github.com/bahmutov/cy-api) to haver a better visualization of our API tests in our Cypress Browser

## About the test

### API Test was done as following:

1. Call https://api.publicapis.org/entries
2. Read the response, find all objects with property “Category: Authentication & Authorization”
3. Compare, count, and verify the number of objects where the property above appears
4. Finally print found objects to console

### UI Test was done as following:

1. Go to https://www.saucedemo.com/
2. Log in to the site. Verify that the items are sorted by Name ( A -> Z ).
3. Change the sorting to Name ( Z -> A).
4. Verify that the items are sorted correctly.

You can find all tests in the path [/cypress/e2e](https://github.com/CaiqueCoelho/cypress-test/tree/main/cypress/e2e)

## How to run the Cypress tests locally

1. Install all dependencia in the terminal run `npm i`
2. In the terminal open Cypress with `npx cypress open` or run cypress headless with `npm run e2e:tests`

## Pipeline

With the tests automated in the GHA pipeline, we can execute our tests every time a pull request is opened to our project to assure everything still works like expected and block the Pull Request from being merged if any tests failed

We can also execute the tests manually by the workflow dispatch in the following link by clicking in the [following link](https://github.com/CaiqueCoelho/cypress-test/actions/workflows/e2e.yml) on Run Workflow in the gray box and on the Run Workflow green button

https://github.com/CaiqueCoelho/cypress-test/actions/workflows/e2e.yml

When the job of tests finish we can see the reports of our executed tests hosted in the Github Artifacts you can find a HTML report, with screenshots when the test failed, and the video of the execution of the tests.

## How to run the Cypress tests in GHA

Go to https://github.com/CaiqueCoelho/cypress-test/actions/workflows/e2e.yml and click in the gray button called Run Workflow and in the green button
called Run Workflow, the job will start and you will be able to see all the steps running include the test and you can download the report in the end
of the job execution in the Summary of the job action in the Artifacts section like the following example https://github.com/CaiqueCoelho/cypress-test/actions/runs/5222923206

## Tests report from the Cypress execution

You can access the following link to see the report of the test execution https://caiquecoelho.github.io/cypress-test/
Or you can download the report from the Github Artifact of the last execution https://github.com/CaiqueCoelho/cypress-test/suites/13493899230/artifacts/741135272

## Tests videos from the Cypress execution

[Watch the video from Signing and Signup flow](https://github.com/CaiqueCoelho/cypress-test/raw/main/cypress/TestReport/videos/Signin%26Signup.cy.js.mp4)

[Watch the video from Article flow](https://github.com/CaiqueCoelho/cypress-test/raw/main/cypress/TestReport/videos/ArticleFlow.cy.js.mp4)
