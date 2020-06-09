## IBM call for code [Korea team 오마영]

QR code based congestion server side application.

![architecture](https://github.com/CallForCodeOhmayoung/be/raw/master/diagram.png?raw=true)

# Running the app

First of all, plz install all of dependencies.

```
npm install
```

And running app using this commands.

```
npm run start
```

## Test

Before reading the this section, please refer to the material you studied with in the past([tdd-study](http://stash.devignlab.com/projects/CELL-NODE/repos/tdd-study/browse))

Automated testing is considered an essential part of any serious software development effort. Automation makes it easy to repeat individual tests or test suites quickly and easily during development. This helps ensure that releases meet quality and performance goals. Automation helps increase coverage and provides a faster feedback loop to developers. Automation both increases the productivity of individual developers and ensures that tests are run at critical development lifecycle junctures, such as source code control check-in, feature integration, and version release.

Such tests often span a variety of types, including unit tests, end-to-end (e2e) tests, integration tests, and so on. While the benefits are unquestionable, it can be tedious to set them up. Nest strives to promote development best practices, including effective testing, so it includes features such as the following to help developers and teams build and automate tests. Nest:

automatically scaffolds default unit tests for components and e2e tests for applications
provides default tooling (such as a test runner that builds an isolated module/application loader)
provides integration with [Jest](https://github.com/facebook/jest) and [Supertest](https://github.com/visionmedia/supertest) out-of-the-box, while remaining agnostic to testing tools
makes the Nest dependency injection system available in the testing environment for easily mocking components
As mentioned, you can use any **testing framework** that you like, as Nest doesn't force any specific tooling. Simply replace the elements needed (such as the test runner), and you will still enjoy the benefits of Nest's ready-made testing facilities

You can define your test codes with reference to this [Unit](https://docs.nestjs.com/fundamentals/testing#unit-testing) and [E2E](https://docs.nestjs.com/fundamentals/testing#end-to-end-testing) document.

And running your test codes.

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# stress tests
$ npm run test:stress

# test coverage
$ npm run test:cov
```

## Where do I go for help?
 
If you need, open an issue.

## Contributing

If you want to contribute to the project (awesome!!), just pull request.
