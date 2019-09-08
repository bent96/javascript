var rijen = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]
var kolommen = [0,1,2,3,4,5,6,7,8,9]

var bord = []

// for loop om bord te maken
// elke vakje vullen met 0

for (var i = 0; i < kolommen.length; i++) {
  var kolom = []
  
  for (var j =0; j < rijen.length; j++) {
    kolom[j] = 0
  }
  
  bord[i] = kolom
}

console.log(bord.length, bord)

