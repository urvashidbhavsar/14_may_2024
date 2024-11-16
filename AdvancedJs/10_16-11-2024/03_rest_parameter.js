function sum(...input) {
    let tot = 0;
    for (let i of input) {
        tot = tot + i;
    }
    return tot
}
console.log('===================');
console.log(sum(1, 3));
console.log(sum(1, 3, 5, 8));
console.log(sum(1, 3, 5, 8, 11, 43));
