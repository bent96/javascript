function reverseArray (a) {
  var b = []
  for (var i = a.length-1; i >= 0 ; i--) {
    b.push(a[i])
  }
  return b
}


console.log(typeof reverseArray === 'function')
console.log(reverseArray([1,2,3,4,5]))