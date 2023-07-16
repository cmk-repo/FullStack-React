## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.




//loop without for loop
var counter = 1;
function printandincreasecount() {
  console.clear()//clear and print
  console.log(counter)
  counter = counter + 1;
  setTimeout(printandincreasecount, 1000); // assignment do without it
}

setTimeout(printandincreasecount, 1000); // assignment do without it