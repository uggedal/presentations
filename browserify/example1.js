var fs = require('fs');
var trimupper = require('./trimupper');

console.log(trimupper(String(fs.readFileSync('input.txt'))));
