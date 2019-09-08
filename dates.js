var bent = new Date(2003,06,3)
var Smilla = new Date(2001,10,15)
var PAPA = new Date(1976,12,19)

function print(d){
  console.log(d)
}
var geboorteDatums = []
geboorteDatums.push(bent) 
geboorteDatums.push(Smilla)
geboorteDatums.push(PAPA)


// var achttienJaar = (1000 * 60 *60 * 24 * 365)

function leeftijd (geboorte) {
  var leeftijd = new Date().valueOf() - geboorte.valueOf()
  return leeftijd
}


//for (var i = 0; i < geboorteDatums.length; i++ ) {
  //var jaar =  1000 * 60 *60 * 24 * 365
  //if (leeftijd(geboorteDatums[i]) < (18 * jaar)) {
    //print(geboorteDatums[i])
  //}
//}

////
function getAdolescents(arr) {
  var c = []
  for (var i = 0; i < arr.length; i++ ) {
    var jaar18 =  18 *1000 * 60 *60 * 24 * 365
    if (leeftijd(arr[i]) < jaar18) {
      c.push(arr[i])
      }
    } 
  return c
}
////

var adolescents = getAdolescents(geboorteDatums)
console.log(typeof getAdolescents === 'function')
console.log(adolescents.length === 2)
