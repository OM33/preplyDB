'use strict'

var args = npm 

var n1 = parseFloat(args[0]);
var n2 = parseFloat(args[1]);

var result = `
     suma : ${n1 + n2}
     resta : ${n1 - n2}
     multiplicacion : ${n1 * n2}
     division : ${n1 / n2}
`;

console.log(args); 
console.log(result);