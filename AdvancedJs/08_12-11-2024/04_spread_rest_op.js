function setnumbers(a, b) {
    return a + b;
}
console.log(setnumbers(3, 4, 5));

// spread op.
function newvalues(...nums) {
    return nums
}
console.log(newvalues(3, 5, 6, 2, 4, 62));

var num1 = [1, 2, 3]
var num2 = [4, 5, 6]
var nums = [...num1, ...num2]
console.log(nums);
