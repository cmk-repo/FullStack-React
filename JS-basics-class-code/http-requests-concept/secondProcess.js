function logResponseBody(jsonBody) {
    console.log(jsonBody);
}

function callback(result) {
    result.json().then(logResponseBody)

}
var sendObj = {
    method: "GET"
}
var sendPost = {
    method: "POST",
    headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ "counter": 4, })
}

fetch("http://localhost:3000/handlesum?counter=100", sendObj).then(callback)
fetch("http://localhost:3000/handlemul", sendPost).then(callback)



// fetch("http://localhost:3000/headers", {
//     method: "POST",
//     headers: {
//         Accept: "application/json, text/plain, */*",
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name: "harkirat" }),
// }).then(res => {
//     res.json().then(data => {
//         console.log(data)
//     })
// })