### Why Babel

Babel is responsible for converting the ES5 and ES6 code to browser understandable code

* babel-core: Well as the name suggests the main engine of babel plugin for its dependents to work.
* babel-preset-env: This is the ES5, ES6 supporting part
* babel-preset-react: Babel can be used in any framework that needs latest JS syntax support, in our case its “React”, hence this preset.
* babel-loader: Consider this as a bridge of communication between Webpack and Babel

### Why Webpack

It is an module bundler and task runner

* webpack: The main webpack plugin as an engine for its dependents.
* webpack-cli: To access some webpack commands through CLI like starting dev server, creating production build, etc.
* webpack-dev-server: A minimal server for client-side development purpose only.
* html-webpack-plugin: Will help in creating HTML templates for our application.


Reference :
> https://medium.com/@siddharthac6/getting-started-with-react-js-using-webpack-and-babel-66549f8fbcb8
> https://www.codecademy.com/articles/react-setup-ii