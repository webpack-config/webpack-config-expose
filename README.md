# webpack-config-expose

Expose modules as global variables.

![build status](http://img.shields.io/travis/webpack-config/webpack-config-expose/master.svg?style=flat)
![coverage](http://img.shields.io/coveralls/webpack-config/webpack-config-expose/master.svg?style=flat)
![license](http://img.shields.io/npm/l/webpack-config-expose.svg?style=flat)
![version](http://img.shields.io/npm/v/webpack-config-expose.svg?style=flat)
![downloads](http://img.shields.io/npm/dm/webpack-config-expose.svg?style=flat)

## Usage

Install:

```sh
npm install --save webpack-config-expose
```

Add to your `webpack.config.babel.js`:

```javascript
import expose from `webpack-config-expose`;

expose({
  // map the global `React` to the local module `react`
  react: 'React',
})({
  /* existing webpack configuration */
})
```

[webpack]: https://webpack.github.io
