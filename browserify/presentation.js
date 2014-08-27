// JS modules
// ----------

// es6:
import trim from './trim';
import uppercase from './uppercase';

var trimupper = function (str) {
  return trim(uppercase(str));
};
export default trimupper

// requirejs:
define(['trim', 'uppercase'], function (trim, uppercase) {
  return function (str) {
    return trim(uppercase(str));
  };
});

// requirejs commonjs emulation:
define(function (require, exports, module) {
  var trim = require('trim');
  var uppercase = require('uppercase');

  module.exports = function (str) {
    return trim(uppercase(str));
  };
});

// commonjs (node):
var trim = require('./trim');
var uppercase = require('./uppercase');

module.exports = function (str) {
  return trim(uppercase(str));
};


// Browserify
// ----------

// $ npm install browserify
// $ browserify <infile>

// Transforms:
// $ npm install brfs
// $ browserify -t brfs <infile>
