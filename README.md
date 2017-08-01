# webpack bug with dll?

when using dll plugin and amd export, you're not able to require the module at runtime

#### Output

```js
define("a", [], function() { return /******/ (function(modules) {
  // Webpack bootstrap
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
THIS IS WHERE THE BUG IS

EXPECTED: __webpack_require__(1); // Removing DLL Plugin sends this output
ACTUAL:   __webpack_require__;    // What is this useful for?
 */
module.exports = __webpack_require__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

console.log("asdf");


/***/ })
/******/ ])});;
```


### Effect of the bug

In AMD, with `require.js`

```js
require(["a"], (__webpack_require__) => {
  // What's the use of __webpack_require__ function here without
  // the module Ids internally assigned by webpack
});
```

So, I assume this is a bug in webpack.

