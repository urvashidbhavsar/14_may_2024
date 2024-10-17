var fur = new Set();
fur.add("Chair");
fur.add("table");
fur.add("cupboard");
console.log('================');
for (const e of fur) {
    console.log(e);
}
fur.delete("table");
console.log('================');
for (const e of fur) {
    console.log(e);
}
fur.clear();
console.log('================');
for (const e of fur) {
    console.log(e);
}