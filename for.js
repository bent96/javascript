var arr1 = [1, 2, 3, 4]
var arr2 = ["a", "b", "c", "d", "e", "a", "b", "c", "d", "e"]

var punten = [5, 6, 7, 6, 8, 4]


var totaal = 0
var i // undefined
for (i=0; i< punten.length; i++) {
  console.log(i,punten[i] )
  totaal= punten[i] + totaal 
}
// i = 6
var average = totaal/i
// var average = totaal / punten.length


console.log(average, average === 6)
console.log(totaal, totaal === 36)

// var lijstje = ["spek", "melk", "boter", "rijst"]
// console.log(arr1)
// console.log(arr2)

// console.log(lijstje.length)
// for (var i = 0; i < lijstje.length; i++) {
//   console.log(i, ":", lijstje[i], " in mandje")
//   lijstje[i] = "x " +   lijstje[i]
// }
// 
// 
// console.log(lijstje)

function maal2 (a) {
  var c=2*a ;
  return c
}

// for (var i = 0; i < arr1.length; i++ ) {
//   console.log (i, arr1[i])
// }

for (var i=arr1.length-1; i >= 0; i-- ) {
  console.log (i, arr1[i])
}

// i++ 
// i = i + 1 

for (var i = 0; i < arr2.length; i = i + 2  ) {
  console.log (i, arr2[i])
}


for (var i = arr2.length/2; i < arr2.length-1; i = i + 1  ) {
  console.log (i, arr2[i])
}




