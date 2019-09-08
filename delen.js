function delen(a, b) {
  if (b == 0) {
    console.log("Error: delen door 0 is niet mogelijk")
      return "Error: delen door 0 is niet mogelijk"
    }
    else {
      return a / b  
      }
   
}


    
var test1 = delen(4,2)
console.log(test1 === 2)

var test3 = delen(40,2)
console.log(test3 === 20)

var test2 = delen(4,0)
console.log(test2 === "Error: delen door 0 is niet mogelijk")
