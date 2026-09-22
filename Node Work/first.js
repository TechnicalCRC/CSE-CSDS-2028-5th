// (function (exports, require, module, __filename, __dirname) {
let Da = require('./second');
let sub = require('./third')

console.log("a = " + Da.a);
console.log("b = " + Da.b);
Da.add(9,8,5);
sub(15,9);
//})