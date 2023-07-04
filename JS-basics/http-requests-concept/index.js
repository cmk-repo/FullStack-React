const express = require('express');
const app = express();
const port = 3000;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
import { star_1, star_2, star_3, star_4, star_5, star_6 } from "../Week1/pattrens.js";

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

function calculateSum(counter) {
    var sum = 0;
    for (var i = 0; i <= counter; i++) {
        sum = sum + i;
    }
    return sum;
}

function calculateMul(counter) {
    var sum = 1;
    for (var i = 1; i <= counter; i++) {
        sum = sum * i;
    }
    return sum;
}

function handlepost(req, res) {
    var num = req.body.counter;
    //console.log(num)
    var calculatedMul = calculateMul(num);
    var answerObject = {
        mul: calculatedMul,
    };
    res.status(200).send(answerObject);
}

function handleget(req, res) {
    // console.log(req.body.counter);
    // var counter = req.body.counter;
    console.log(req.query.counter);
    var counter = req.query.counter;
    var calculatedSum = calculateSum(counter);
    var answerObject = {
        sum: calculatedSum,
    };
    res.status(200).send(answerObject);
}

app.get('/handleSum', handleget);
app.post('/handlemul', handlepost);

function started() {
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);