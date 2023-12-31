const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3002

app.use(bodyParser.json())

function calculateSum(counter) {
    var sum = 0;
    for (var i = 1; i <= counter; i++) {
        sum = sum + i;
    }
    return sum;
}

function calculateMul(counter) {
    var answer = 1;
    for (var i = 1; i <= counter; i++) {
        answer = answer * i;
    }
    return answer;
}

function handleFirstRequest(req, res) {
    var counter = req.body.counter;

    var calculatedSum = calculateSum(counter);
    var calculatedMul = calculateMul(counter);

    var answerObject = {
        sum: calculatedSum,
        mul: calculatedMul,
    };

    res.status(200).send(answerObject);
}


function givePage(req, res) {
    res.sendFile(__dirname + "/index.html")
}

app.get('/', givePage)


app.post('/handleSum', handleFirstRequest)


function started() {
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)

