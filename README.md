# web-components-demo
Web Components demo with monorepo

# How to use
Yarn 2 binary is installed in this repo, so you don't have to change yarn version in your machine. You can run yarn script list below directly.

## Install dependencies
```sh
$ yarn install
```
Do this in the project root.

## Build Web Components
```sh
$ yarn workspace @web-components-demo/components build
```
You must build component artifacts for the first time you use this demo.

## Run examples
```sh
$ yarn workspace @web-components-demo/vue-example serve
$ yarn workspace @web-components-demo/vanillajs-example start
```
Open browser to see the results.
