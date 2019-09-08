function identiteit(a) {
  return a
}


var test1 = 2
var test2 = "ik"
// console.log (identiteit(test1)===test1)
// console.log (identiteit(test2)===test2)





function eersteGraad(a,x,q) {
  y = a*x+q
  return y
}
// var antw = 5
// console.log (eersteGraad(2,2,1)===antw)


var a= 1
var x= 3
var A= 3
var B= 2

function nulwaardeTweede(a,A,B) {
  n = a*Math.pow(0-A,2)+B
  return n
}


function tweedeGraads(a,x,A,B) {
  var y = a*Math.pow(x-A,2)+B
  return y
}


function kenmerken(a,x,A,B) {
var functieId= []
functieId.push("Domein = R" )
if (a>0){
  functieId.push("Beeld =]-∞," + B + "]"  )
}
else {
  functieId.push("Beeld =[" + B + ",+∞+[" )
}
functieId.push("Top =" + A + ", " + B )
functieId.push("SpiegelAs =" + A )
functieId.push("Nulwaarde =" + nulwaardeTweede(a,A,B) )
return functieId
}
console.log(tweedeGraads(1,3,3,2)===2)
console.log(kenmerken(1,3,3,2))







