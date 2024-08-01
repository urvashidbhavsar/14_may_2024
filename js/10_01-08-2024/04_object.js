var cloth = {
    brands: "zara",
    color: "black",
    material: "cotton",
    price: 250,
    size: "xl"
}
console.log(cloth);

var key;
for (key in cloth) {
    if (Object.hasOwnProperty.call(cloth, key)) {
        console.log(`${key} => ${cloth[key]}`);
    }
}