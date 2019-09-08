// Write a JavaScript for loop that will iterate from 0 to 15. 
// For each step it will check if the current number is odd or even, and display a message to the screen.
// Sample Output : 
// "0 is even" 
// "1 is odd" 
// "2 is even"

// 3 % 2 = 1
// 4 % 2 = 0
// 5 % 2 = 1
// 6 % 2 = 0

for (var i = 0 ; i < 15 ; i++) {
  if ( 0 == i % 2 ) { 
    console.log(i,"is even")
  }
  else {
    console.log(i,"is odd")
  }
}