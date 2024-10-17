var fur = new Set();
fur.add("Chair");
fur.add("table");
fur.add("cupboard");
fur.add("cupboard");
fur.add("dressingTable")

console.log('================');
let furniture = fur.entries();
for (const e of furniture) {
    console.log(e);
}
console.log('================');
fur.forEach(e => {
    console.log(e);
});
console.log('================');
console.log(fur.has("chair"));
console.log(fur.has("Chair"));
console.log('================');
furniture = fur.values();
for (const e of furniture) {
    console.log(e);
}
console.log("===============");
furniture = fur.values();
console.log(furniture.next());
