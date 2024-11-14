function person(name) {
    this.name = name;
}
person.prototype.getpname = function () {
    return this.name;
}

function emp(desig, sal) {
    this.desig = desig;
    this.sal = sal;
}
function stud(deg) {
    this.deg = deg;
}

var p = new person("Urvashi");
emp.prototype = p;
stud.prototype = p
var e = new emp("Trainer", 25000);
var s = new stud("MCA")
console.log(e.getpname() + " " + e.desig + " " + e.sal);
console.log(s.getpname() + " " + s.deg);


