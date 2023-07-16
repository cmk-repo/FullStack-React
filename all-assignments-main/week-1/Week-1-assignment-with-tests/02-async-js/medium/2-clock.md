Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
 
function printc(){
  let currentDate = new Date();
  // console.log(currentDate.getHours())
  // console.log(currentDate.getMinutes())
  // console.log(currentDate.getSeconds())
const answer = currentDate.getHours()+":"+currentDate.getMinutes()+":"+currentDate.getSeconds();
  console.log(answer);
}

function printTime(){
  console.clear();
  printc();
}

setInterval(printTime,1000)


// how to handle time zone correctly.
