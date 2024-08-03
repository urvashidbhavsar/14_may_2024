// create a pattern
// var ptn = /^[a-z]*$/i
var ptn = /^[A-Za-z]*$/
var str = "Hello"

if (ptn.test(str)) {
    console.log("match");
} else {
    console.log("not match");
}