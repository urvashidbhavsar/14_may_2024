function mymember() {
    this.empname = "Abc";
    throw new Error("You cant create instance of an abstract class");
}
mymember.prototype.display = function () {
    return "Employee name : " + this.empname;
}
function newmember(empname) {
    this.empname = empname;
}
// var emp1 = new employee("Urvashi");
newmember.prototype = Object.create(mymember.prototype);
var emp1 = new newmember("Urvashi");
console.log(emp1);
console.log(emp1.display());



