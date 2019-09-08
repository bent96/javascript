var jsArray = new Object()

// lijst
// index
// 0 -> length-1
// length
// push

jsArray.length = 0
jsArray.push = function push(a){
  var index = this.length
  this[index] = a
  this.length = this.length  + 1
}

console.log(jsArray)
jsArray.push(1)

console.log(jsArray)

jsArray.pop = function pop(){
  var index = this.length - 1
  delete jsArray[index]
  this.length = this.length  -  1
  
}

jsArray.pop()
console.log(jsArray)
// var o = new Object()
// o['test'] = 1
// console.log(o)
// delete o.test
// console.log(o)
