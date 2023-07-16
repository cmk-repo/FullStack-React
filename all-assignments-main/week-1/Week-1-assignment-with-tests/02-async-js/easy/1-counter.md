## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

// var counter = 1;
// function printandincreasecount() {
//   console.clear()//clear and print
//   console.log(counter)
//   counter = counter + 1;
// }

// //setInterval(printandincreasecount, 1000); // assignment do without it
// for (var i = 0; i < 100; i++) {
//   setTimeout(printandincreasecount, (i + 1) * 1000);
// }


//loop without for loop
var counter = 1;
function printandincreasecount() {
  console.clear()//clear and print
  console.log(counter)
  counter = counter + 1;
  setTimeout(printandincreasecount, 1000); // assignment do without it
}

setTimeout(printandincreasecount, 1000); // assignment do without it
