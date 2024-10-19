const add = () => {
    let count = 0;

    return function () {
        count += 1
        return count
    }
}
var a = add();
console.log(a());
console.log(a());
console.log(a());
console.log(a());