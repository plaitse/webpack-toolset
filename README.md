# Webpack toolset

*Module bundler to create static assets with Babel ES6/ES5 transpiler* -
*Versions: Webpack 4 and Babel 7*

## Prerequisites

- Install Webpack globally via ```npm install -g webpack@latest```
- Install Webpack-cli globally via ```npm install -g webpack-cli@latest```

## Installing

- Install node modules via ```npm i```

## Running

At the root foler:
- ```npm run dev``` for development mode - to compile stylesheets and JavaScript files, launch a server and reload the browser when changes are made
- ```npm run prod``` for production mode - to only compile stylesheets and JavaScript files

## Information

Babel:
- ```@babel/cli```: command line interface which communicates with Babel transpiler - https://www.npmjs.com/package/babel-cli
- ```@babel/core```: transpiler - https://www.npmjs.com/package/babel-core 
- ```@babel/preset-env```: transpiles ES6/ES7/ES8 files - https://www.npmjs.com/package/babel-preset-env 

Loaders:
- ```babel-loader```: allows transpilling JavaScript - https://www.npmjs.com/package/babel-loader 
- ```css-loader```: interprets imports and returns CSS code - https://www.npmjs.com/package/css-loader 
- ```postcss-loader```: adds prefixes to CSS rules using values from Can I Use - https://www.npmjs.com/package/postcss-loader 
- ```sass-loader```: loads Sass files and compiles them to CSS - https://www.npmjs.com/package/sass-loader 
- ```style-loader```: injects a ```<style>``` tag to the DOM - https://www.npmjs.com/package/style-loader

Webpack:
- ```webpack```: compiler/bundler - https://www.npmjs.com/package/webpack 
- ```webpack-cli```: command line interface which communicates with Webpack compiler/bundler - https://www.npmjs.com/package/webpack-cli 
- ```webpack-dev-server```: creates a dvelopment server - https://www.npmjs.com/package/webpack-dev-server 

---

*Other useful packages:*
- ```@babel/preset-react```: transpiles React files - https://www.npmjs.com/package/babel-preset-react 
- ```@babel/register```: transpiles ES6/ES/JSX/JS files required by Node.js - https://www.npmjs.com/package/babel-register 
