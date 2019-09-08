var player = new Object()
player.username = "Bent"
player.gender = "F" // "M"


function changeGender(player) {
  if (player.gender=== 'F') {
    player.gender = 'M' 
  }
  else {
    player.gender ='F'
  }
  return player
}

bent = changeGender(player)
console.log(bent.gender)

// player.username = "Len"
// 
// var a = 5
// a = 40