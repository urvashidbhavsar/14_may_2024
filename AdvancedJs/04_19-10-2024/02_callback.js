function addition(x, y, callback) {
    console.log(`Addition is : ${x + y}`);
    callback
}
function res() {
    console.log("finally result executed");
}
addition(15, 23, res())

// ====================================
// function addition(x, y, callback) {
//     console.log(`Addition is : ${x + y}`);
//     callback()
// }
// function res() {
//     console.log("finally result executed");
// }
// addition(15, 23, res)