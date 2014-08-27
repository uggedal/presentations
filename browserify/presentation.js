// JS modules
// ----------

// es6:
import trim from './trim';
import uppercase from './uppercase';

var trimupper = function (str) {
  return trim(uppercase(str));
};
export default trimupper

// requirejs amd:
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
// $ browserify <infile> > <outfile>

// Transforms:
// $ npm install brfs
// $ browserify -t brfs <infile> > <outfile>


// Watchify
// --------

// $ npm install watchify
// $ watchify <infile> -o <outfile>
// $ watchify <infile> -v -o <outfile>
// $ watchify <infile> -t brfs -o <outfile>


// Tape
// ----
// $ npm install tape
// $ node <testfile>


// Testling
// --------
// $ npm install testling
// $ browserify <testfile> | testling
// $ browserify <testfile> | testling -x <browser>


// Coverify
// --------
// $ npm install coverify
// $ browserify <testfile> -t coverify | testling | coverify


// More
// ----
// * more transforms:
//   https://github.com/substack/node-browserify/wiki/list-of-transforms
// * source-maps (browserify --debug)
// * package.json integration
// * module philosophy
// * avoiding relative imports (../../../../../)
//   - use node_modules with .gitignore
//   - use symlink
// * optimization
//   - npm dedupe
//   - browserify --list
// * partitioning
//   - factor-bundle (for multi-page)
//   - partition-bundle (for single-page)


// Slides
// ------
// http://git.uggedal.com/presentations/tree/browserify
