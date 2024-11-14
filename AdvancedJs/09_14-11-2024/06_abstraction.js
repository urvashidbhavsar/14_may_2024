function mymember(empname) {
    this.empname = empname;
    throw new Error("You cant create instance of an abstract class")
}
mymember.prototype.display = function () {
    return this.empname;
}
// var emp1 = new employee("Urvashi");
var emp1 = new mymember();
console.log(emp1);
