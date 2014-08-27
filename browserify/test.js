var test = require('tape');
var fs = require('fs');
var trimupper = require('./trimupper');

test('should trim and uppercase text', function (t) {
  var text = String(fs.readFileSync('input.txt'));
  t.equal('Hello World', trimupper(text));
  t.end();
});
