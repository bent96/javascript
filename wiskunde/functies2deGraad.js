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


function alfaBerekenen(a,b) {
  var A = -b/(2*a)
  return A
}
function betaberekenen(a,b,c) {
  var B = (Math.pow(-b,2)+ 4*a*c)/4*a
  return B
}

function nulwaarde1 (D,a,b) {
  var na =(Math.pow(-b,2)+ Math.sqrt(D))/2*a
  return na
 }

function nulwaarde2 (D,a,b) {
  var nb =(Math.pow(-b,2)- Math.sqrt(D))/2*a
  return nb
 }

function discriminant(a,b,c) {
  var D = Math.pow(-b,2)- 4*a*c
  if (D < 0) { 
    console.log("geen wortel")
  }
  else {
    if (D===0) {
    alfaBerekenen(a,b)
    console.log(A + "1 nulwaarde")
    } 
    }  
    else {
    console.log(nulwaarde1(D,a,b) + nulwaarde2 (D,a,b) +"2 nulwaarde")
  }
 
  return D

}
console.log("Het werkt")

