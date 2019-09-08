function createPlayer (name) {
  var player   = new Object()
  player.name  = name
  player.score = 6
  player.bord  = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]
  
  player.zetBootOpBord = function zetBootOpBord (boot) {
    for(var i = 0; i < boot.length; i++) {
      var coordinaten = boot[i]
      var x = coordinaten[0]// index  0  = [0,0]
      var y = coordinaten[1]
      this.bord[x][y] = "x"
    }
  }
  
  player.zetBoten = function zetBoten(boten){
    for(var i = 0; i < boten.length; i++){
      var boot = boten[i]
      this.zetBootOpBord(boot)
    }
  }
  
  player.score = 6
  
  player.shoot = function shoot (co, bord) {
    var x = co[0]
    var y = co[1]
    var target = bord[x][y]
    if (target === 'x') {
      console.log('raak')
      bord[x][y] = 0
      this.bord[x][y] = this.bord[x][y] + "+"
      this.score = this.score - 1
    } else {
      console.log('mis')
      this.bord[x][y] = this.bord[x][y] + "-" 
    }
  }
  
  player.printBord = function print() {
    var lijn = ""
    var bord = ""
    
    for (var i = 0; i < this.bord.length * 4; i++) {
        lijn = lijn + "-"
    }
    
    console.log(lijn) // boven
    for (var i = 0; i < this.bord.length; i++) {
      bord = ""
      for (var k = 0; k < this.bord.length; k++){
        bord = bord + "| " + this.bord[i][k] + " "
      }
      bord = bord + " |"
      console.log(bord)
    }
    console.log(lijn) // onder
    
  }
  
  
  return player
}

var players =[]





while(true){
  if (players.length === 2) {
    
  }
  else {
    console.log( 'Niet genoeg spelers.')
    break
  }
  
}






































// var bent = createPlayer('Bent')
// 
// var coordinatenBoot1 = [[0, 0]]
// var coordinatenBoot2 = [[1,1], [1,2]]
// var coordinatenBoot3 = [[2,3],[3,3],[4,3]]
// 
// var bentBoten  = [coordinatenBoot1, coordinatenBoot2, coordinatenBoot3]
// bent.zetBoten(bentBoten)
// 
// // console.log(bent.bord)
// 
// 
// var len  = createPlayer('Len')
// 
// var coordinatenBoot1 = [[0, 0]]
// var coordinatenBoot2 = [[2,1], [2,2]]
// var coordinatenBoot3 = [[3,3],[4,3],[2,3]]
// 
// var lenBoten  = [coordinatenBoot1, coordinatenBoot2, coordinatenBoot3]
// len.zetBoten(lenBoten)
// 
// console.log(len.print())

























// bord voor speler 1, 5x5

// var boten =[]
// var aantalboten = 3
// for(var i = 0; i < aantalboten; i++) {
//   var boot = new Object()
//   boot.length = i + 1 
//   boten.push(boot)
// }
// 
// console.log(boten)
// 
// 
// function zetBootOpBord (c) {
//   // for elk element in c
//   //   zet op bord
//   for(var i = 0; i < c.length; i++) {
//     var coordinaten = c[i]
//     var x = coordinaten[0]// index  0  = [0,0]
//     var y = coordinaten[1]
//     bord1[x][y] = "x"
//   }
// }
// 
// var coordinatenBoot1 = [[0, 0]]
// var coordinatenBoot2 = [[1,1], [1,2]]
// var coordinatenBoot3 = [[2,3],[3,3],[4,3]]
// 
// zetBootOpBord(coordinatenBoot1)
// zetBootOpBord(coordinatenBoot2)
// zetBootOpBord(coordinatenBoot3)
// 
// // console.log(boten)
// // console.log(bord1)
// 
// function shoot (co, bord) {
//   var x = co[0]
//   var y = co[1]
//   var target = bord[x][y]
//   if (target === 'x') {
//     console.log('raak')
//     bord[x][y] = 0
//   } else {
//     console.log('mis') 
//   }
// }

// shoot([0,0], bord1)
// shoot([4,4], bord1)
// console.log(bord1)

