//Left Triangle Pattern in Javascript

function star_6(Number) {
    let buff = "";
    for (let j = 1; j <= Number + 1; j++) {
        for (let k = 0; k < j; k++) {
            buff += "*";
        }
        buff += "\n";
    }
    return buff;
}

// Right Triangle Pattern in Javascript
function star_5(Number) {
    let buff = "";
    for (let j = 1; j <= Number; j++) {
        for (let i = 0; i < Number - j; i++) {
            buff += " ";
        }
        for (let k = 0; k < j; k++) {
            buff += "*";
        }
        buff += "\n";
    }
    return buff;
}

function star_4(Number) {
    let buff = "";
    for (let j = 0; j < Number; j++) {
        for (let i = 0; i < Number; i++) {
            if (j === Number - i) {
                buff += "*";
            }
            else {
                buff += " ";
            }
        }
        buff += "\n";
    }
    return buff;
}


function star_3(Number) {
    let buff = ""; // using let better than var
    for (j = 0; j < Number; j++) {
        for (i = 0; i < Number; i++) { // since we have same number of row and column stars
            if (j === 0 || j === Number - 1) {
                buff += "*";
            }
            else {
                if (i == 0 || i === Number - 1) {
                    buff += "*";
                }
                else {
                    buff += " ";
                }
            }
        }
        buff += "\n";
    }
    return buff;
}

// ------------3rd pattern print
/*
*****
*****
*****
*****
*****
*/

function star_2(Number) {
    let buff = ""; // using let better than var
    for (j = 0; j < Number; j++) {
        for (i = 0; i < Number; i++) { // since we have same number of row and column stars
            buff += "*"; // += is same as buff = buff+....
        }
        buff += "\n";
    }
    return buff;
}


//--------------1nd print pattern
/*
*
**
***
****
 */
function star_1(Number) {
    var buf = "";
    for (i = 0; i < Number; i++) {
        for (k = 0; k < i; k++) {
            buf = buf + "*";
        }
        buf = buf + "\n";
        //        console.log(buf); prints one iteration at a time so adding \n will add to next line
    }
    return buf;
}
console.log("Pattern1");
var ans = star_1(5);
console.log(ans);
//
console.log("Pattern2");
console.log(star_2(5)); // we can call function inside too no need to assign var
//
console.log("Pattern3");
console.log(star_3(5));
//
console.log("Pattern4");
console.log(star_4(5));
//
console.log("Pattern5");
console.log(star_5(5));
//
console.log("Pattern6");
console.log(star_6(5));
//
//export { star_1, star_2, star_3, star_4, star_5, star_6 }
//-------------- 1st test node installation Vs code
//1st test to run type "node filename" in terminal
//console.log("Testing Node Js");