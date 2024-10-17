var mymap = new Map();
mymap.set(1, "Angular")
mymap.set(2, "react")
mymap.set(3, "vue")

for (const e of mymap) {
    console.log(e);
}
console.log("---------------------");
mymap.clear();

var mymap = new Map();
mymap.set(1, "Angular")
mymap.set(2, "react")
mymap.set(3, "vue")
console.log("---------------------");
mymap.delete(2)
for (const e of mymap) {
    console.log(e);
}
console.log("---------------------");
let map = mymap.entries();
console.log(map.next());
console.log(map.next());
console.log("---------------------");
for (const m of map) {
    console.log(m);
}
