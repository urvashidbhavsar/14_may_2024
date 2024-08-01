var fruits = ["Apple", "Banana", "Grapes", "Pineapple", "Orange"];
console.log(fruits);

// to print a single array value.
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// use loop to print an array.
console.log("=========for of loop =======");
for (const ft of fruits) {
    console.log(ft);
}

console.log("=========for loop =======");
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i} => ${fruits[i]}`);
}

console.log("========= for each =======");
fruits.forEach(mynewval => {
    console.log(mynewval);
});