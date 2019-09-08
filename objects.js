var Mybike = new Object()
Mybike.make  = 'Ridley'
Mybike.model = 'fenix sl' 
Mybike.year  = 2015
// Mybike.wielen  = []
Mybike.wielen = {} //new Object()

Mybike.fietsen = function fietsen(){
  console.log("Draaien die pedalen")
}

var Voorwiel = new Object()
Voorwiel['make']    = 'Fulcrum'
Voorwiel['model']   = 'Racing 7'
Voorwiel['spaken']  =  20
Voorwiel['breedte'] =  '20mm'


var Achterwiel = new Object()
Achterwiel['make']    = 'Fulcrum'
Achterwiel['model']   = 'Racing 7'
Achterwiel['spaken']  =  24
Achterwiel['breedte'] =  '20mm'

Mybike.wielen['achterwiel'] = Achterwiel
Mybike.wielen['voorrwiel'] = Voorwiel


Mybike.wielen['achterwiel']['diameter'] = {
  'value' : 28.5,
  'unit' : 'inch'
}

// Mybike.wielen.push(Voorwiel)
// Mybike.wielen.push(Achterwiel)
console.log (Mybike)
console.log (Mybike.wielen)
Mybike.fietsen()
