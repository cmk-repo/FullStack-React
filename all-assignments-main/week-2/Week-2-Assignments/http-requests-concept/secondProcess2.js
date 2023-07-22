
function logResponseBody(jsonBody) {
    console.log(jsonBody);
}

function callbackFn(result) {
    result.json().then(logResponseBody)
}

function callbackFn2(response) {
    response.text().then(logResponseBody);
}


var sendObj = {
    method: "GET",
};
var sendObj2 = {
    method: "POST",
};
fetch("http://localhost:3002/", sendObj).then(callbackFn2)
fetch("http://localhost:3002/handleSum?counter=100", sendObj2).then(callbackFn)