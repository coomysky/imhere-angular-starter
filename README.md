# imhere-angular-starter

Seed project for ES6 modules via SystemJS with ES6 syntax using Babel that lazy-load and bundle build with AngularJS.

This project does:

- ES6 Syntax via Babel with source maps
- ES6 Modules via SystemJS
- Karma / Jasmine unit tests with coverage report
- Lazy-loading modules via routes with AngularJS
- Easy watch/browser-sync/lint/test/build setup via Gulp
- LESS CSS Support with source maps and minification
- AngularJS Template Compilation
- AngularJS Annotatation
- Bundle builds via SystemJS Builder
- Cache Busting with SystemJS
- Demonstrates on-demand theme loading

This seed project demonstrates the [systemjs-route-bundler](https://github.com/swimlane/systemjs-route-bundler) build tool.

### Install & Run

#### Prerequisite
  - Node 6.2.2+
  - Ruby 2.0+

#### Install tools
```shell
> npm install -g yarn
> npm install -g jspm
> gem install bundler # for capistrano to deploy
```

#### Install dependencies
```
$ yarn
$ bundle install
$ gem install compass
```

#### Config

```
cp src/common/config/appConfig.json.sample src/common/config/appConfig.json
```

and change the setting.

#### Run

```
$ yarn start
```
Browse to `http://localhost:3000`

### Gulp Tasks

- `gulp test` to run karma tests
- `gulp webdriver-standalone` and `gulp sauce-test` to run e2e test
- `gulp lint` to run jshint
- `gulp release` to bundle, cache busting, and minify
