function getTotal(a) {
  var b=0
  
  for (var i = 0; i< a.length; i++) {
  b = a[i] + b
  }
return b
}

module.exports = {
  getTotal: getTotal
}


// var module = new Object()
// module['exports'] = new Object()
// module['exports']['getTotal'] = getTotal