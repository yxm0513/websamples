# 12 Testing Infraestructure

This sample series takes as starting point _10 HotLoader_

We will add all the setup needed to support unit testing on this project.

Summary:

- Add all the needed packages.
- Configure karma.



# Prerequisites

Install [Node.js and npm](https://nodejs.org/en/) (v6.6.0) if they are not already installed on your computer.

> Verify that you are running at least node v6.x.x and npm 3.x.x by running `node -v` and `npm -v` in a terminal/console window. Older versions may produce errors.

## Steps to build it

- Let's start by installing the testing libraries / runners:

- **chai:** BDD / TDD assertion framework for node.js and the browser that can be paired with any testing framework.
- **deep-freeze**:To ensure immutability of the reducers.
- **enzyme**: Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.
- **mocha**: Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple.
- **redux-mock-store:** A mock store for testing your redux async action creators and middleware.
- **sinon:** Standalone and test framework agnostic JavaScript test spies, stubs and mocks.
- **sinon-chai**: extends Chai with assertions for the sinon.js mocking framework.
- **karma:** test runner. A simple tool that allows you to execute JavaScript code in multiple real browsers.
- **karma-sinon-chai:** sinon, chai and sinon-chai plugins for karma.
- **karma-chrome-launcher:** chrome browser support plugin for karma.
- **karma-mocha:** mocha plugin for karma.
- **karma-sourcemap-loader:** add source map support to karma (debugging).
- **karma-webpack:** webpack support for karma.
- **react-addons-test-utils**: makes it easy to test React components in the testing framework of your choice.
- **karma-mocha-reporter**: Friendly karma progress reporter.


We will do that by running:

```
npm install chai deep-freeze enzyme enzyme-adapter-react-16 mocha sinon karma karma-chrome-launcher karma-mocha karma-mocha-reporter karma-sinon-chai karma-sourcemap-loader karma-webpack react-addons-test-utils sinon-chai --save-dev
```

- Save exact version due to [breaking changes in 1.5 version](https://github.com/arnaudbenard/redux-mock-store/issues/135)
```bash
npm install redux-mock-store@1.4 -D -E

```

- Now let's install the needed typings:

```
npm install @types/mocha @types/deep-freeze @types/enzyme @types/redux-mock-store @types/karma-chai-sinon --save-dev
```

- Let's add a new entry to our tsconfig file:

_./tsconfig.json_

```diff
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "moduleResolution": "node",
    "declaration": false,
    "noImplicitAny": false,
    "jsx": "react",
    "sourceMap": true,
    "noLib": false,
    "suppressImplicitAnyIndexErrors": true,
    "types": [
      "webpack-env",
+      "karma-chai-sinon",
+      "mocha"
    ]
  },
```

- We are going to do implement a little trick to compile all specs in the project in a single file and properly generate
maps, let's create under the root folder a subfolder named "test" and create a file called "test_index.js", the file will contain the following code:

_./test_index.js_

````javascript
// Configure enzyme adapter
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
enzyme.configure({ adapter: new Adapter() });

// require all modules ending in ".spec" from the
// current directory and all subdirectories
const testsContext = require.context('./src', true, /.spec$/);
testsContext.keys().forEach(testsContext);

const componentsContext = require.context('./src', true, /.ts$/);
componentsContext.keys().forEach(componentsContext);

````

Now let's add the karma.conf configuration to run the tests

In this configuration we:
  - Setup the test frameworks / libraries
we are going to use (mocha, chai, sinon).

  -  Indicate the entry point (test/index.js).

  - Configure karma webpack entry (map, ts loaders...).

  - Configure enzyme for proper component testing (we will use it
    in further samples, component testing).

  -  Setup the port where will run and indicate the browser it will run.

_./karma.conf.js_

```javascript
var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon-chai'],
    files: [
      './test/test_index.js'
    ],
    exclude: [
    ],
    preprocessors: {
      './test/test_index.js': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
          rules: [
            {
              test: /\.(ts|tsx)$/,
              exclude: /node_modules/,
              use: {
                loader: 'awesome-typescript-loader',
                options: {
                  useBabel: true,
                },
              },
            },
            {
              test: /\.css$/,
              include: /node_modules/,
              loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: {
                  loader: 'css-loader',
                },
              }),
            },
            // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
            // Using here url-loader and file-loader
            {
              test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
              test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
            },
            {
              test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
            },
            {
              test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
              loader: 'file-loader'
            },
          ],
          //Configuration required to import sinon on spec.ts files
          noParse: [
              /node_modules(\\|\/)sinon/,
          ]
      },
      resolve: {
          //Added .json extension required by cheerio (enzyme dependency)
          extensions: ['.js', '.ts', '.tsx'],
          //Configuration required to import sinon on spec.ts files
          // https://github.com/webpack/webpack/issues/304
          alias: {
            sinon: 'sinon/pkg/sinon'
          }
      },
      //Configuration required by enzyme
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window',
      }
    },
    webpackMiddleware: {
        // webpack-dev-middleware configuration
        // i. e.
        noInfo: true
    },

    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
```

Let's add  command to our npm to run the tests (package.json)

````diff
  "scripts": {
    "start": "webpack-dev-server",
    "build": "webpack",
+    "test": "karma start --single-run",
+    "test:watch": "karma start --no-single-run"
  },
```


