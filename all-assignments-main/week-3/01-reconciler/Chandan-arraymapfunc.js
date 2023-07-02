let array = [1, 2, 3, 4]

// prints all in one line why ?
let newArray2 = array.map((value) => {
    return (value * 4)
})
console.log(newArray2);
//-----------------------------------------------------------------
// prints one below another why ?
function callback(value) {
    console.log(value);
}
const arr2 = array.map(callback)

//-----------------------------------------------------------------
// prints 2 times why ?
var arr1 = [{
    name: "test",
    age: 21
}, {
    name: "MK",
    age: 53
}, {
    name: "asdad",
    age: 27
}, {
    name: "asdadada",
    age: 26
}]

const arr3 = arr1.map((value) => {
    if (value.age < 25) {
        return {
            name: value.name,
            age: value.age,
            allowed: false
        }

    } else {
        return {
            name: value.name,
            age: value.age,
            allowed: true
        }
    }
})

console.log(arr3)