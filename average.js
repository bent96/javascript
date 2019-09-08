var total = require("./total.js")

function getAverage (x) {
  var c = total.getTotal(x) / x.length 
  return c
} 

// console.log(typeof getAverage === 'function')
// console.log(2.5 === getAverage([1,2,3,4]))