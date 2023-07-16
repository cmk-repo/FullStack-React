## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

// chat gpt way
// const fs = require('fs');

// fs.readFile('path/to/file.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

const fs = require('fs');

let data = "helloooooooooooooooooooooooooooooooooo";

function afterContentUpdate(err){
  if (err) {
    console.error(err);
    return;
  }
  console.log("data has been written");

}
fs.writeFile('./a.txt',data, 'utf8',afterContentUpdate);
