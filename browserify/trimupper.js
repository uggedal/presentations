var trim = require('./trim');
var uppercase = require('./uppercase');

module.exports = function (str) {
  return trim(uppercase(str));
};
