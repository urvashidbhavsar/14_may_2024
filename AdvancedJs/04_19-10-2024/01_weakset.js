var ws = new WeakSet();
var obj = { num: 1 }, obj2 = { num: 2 }, obj3 = { num: 3 };

ws.add(obj)
ws.add(obj2)

console.log(ws.has(obj));
console.log(ws.has(obj2));
console.log(ws.has(obj3));

ws.delete(obj2)
console.log(ws.has(obj2));

