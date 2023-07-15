/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

// take care of special charecters such as space comma dot etc 
function transform_(str) {
  let b = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || str[i] === "," || str[i] === "?" || str[i] === "!" || str[i] === ".") {

    } else {
      b += str[i]
    }
  }
  return b
}

function reverse(str) {
  let a = "";
  //console.log(str.length)
  for (let i = str.length - 1; i >= 0; i--) {
    a += str[i]
  }
  return a
}


function isPalindrome(str) {
  // return true;
  str = str.toLowerCase();
  // clear extra stuff first 
  str = transform_(str);
  let rstr = reverse(str);
  if (rstr === str) {
    return true
  } else {
    return false
  }
}

module.exports = isPalindrome;
