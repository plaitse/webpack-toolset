# Webpack toolset

*Module bundler to create static assets with Babel ES6/ES5 transpiler* -
*Versions: Webpack 4 and Babel 7*

## What is Webpack?

Webpack is a JavaScript module bundler capable of transformating, bundling or packaging any resource or asset like JavaScript, HTML, CSS and images if the corresponding plugins are included. It allows a modular approach for the application development.

Famous features:
- The bundler can be configured using a config file named webpack.config.js.
- It can take modules with dependencies and generates static assets representing those modules.
- Loaders allow to write custom tasks that we want to perform when bundling files together.
- Provides a built in development server called Webpack Dev Server that can be used as a HTTP server for serving our files.
- Provides the capability to use Hot module replacement by turning on the hot flag.

Createapp.dev simplifies the process of creating the config file: https://createapp.dev/webpack.

## Prerequisites

- Install Webpack globally via ```npm install -g webpack@latest```
- Install Webpack-cli globally via ```npm install -g webpack-cli@latest```

*Upgrade to Webpack 4 and Babel 7:*
- https://babeljs.io/docs/en/v7-migration
- https://webpack.js.org/migrate/4/

## Installing

- Install node modules via ```npm i```

## Running

At the root foler:
- ```npm run dev``` for development mode - to compile stylesheets and JavaScript files, launch a server and reload the browser when changes are made
- ```npm run prod``` for production mode - to only compile stylesheets and JavaScript files

## Information

### Babel

- ```@babel/cli```: command line interface which communicates with Babel transpiler - https://www.npmjs.com/package/babel-cli
- ```@babel/core```: transpiler - https://www.npmjs.com/package/babel-core 
- ```@babel/preset-env```: transpiles ES6/ES7/ES8 files - https://www.npmjs.com/package/babel-preset-env 

### Loaders

- ```babel-loader```: allows transpilling JavaScript - https://www.npmjs.com/package/babel-loader 
- ```css-loader```: interprets imports and returns CSS code - https://www.npmjs.com/package/css-loader 
- ```postcss-loader```: adds prefixes to CSS rules using values from Can I Use - https://www.npmjs.com/package/postcss-loader 
- ```sass-loader```: loads Sass files and compiles them to CSS - https://www.npmjs.com/package/sass-loader 
- ```style-loader```: injects a ```<style>``` tag to the DOM - https://www.npmjs.com/package/style-loader

### Webpack

- ```webpack```: compiler/bundler - https://www.npmjs.com/package/webpack 
- ```webpack-cli```: command line interface which communicates with Webpack compiler/bundler - https://www.npmjs.com/package/webpack-cli 
- ```webpack-dev-server```: creates a dvelopment server - https://www.npmjs.com/package/webpack-dev-server 

---

*Other useful packages:*
- ```@babel/preset-react```: transpiles React files - https://www.npmjs.com/package/babel-preset-react 
- ```@babel/register```: transpiles ES6/ES/JSX/JS files required by Node.js - https://www.npmjs.com/package/babel-register
