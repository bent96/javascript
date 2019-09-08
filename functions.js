function add (a, b) {
  return a + b
}

function addTwoAndThree () {
  var c = add(2,3)
  return c
}


function print (f) {
  console.log (f())
}

// console.log(addTwoAndThree(2,3))
// console.log(print(addTwoAndThree(2,3)))
print(addTwoAndThree)