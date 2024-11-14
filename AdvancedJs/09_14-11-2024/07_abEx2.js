class mymember {
    constructor() {
        this.empname;
        throw new Error("You cant create instance of an abstract class");
    }
    display() {
        return "Employee name : " + this.empname;
    }
}
class newmember {
    constructor(empname) {
        this.empname = empname;
    }
}
// var emp1 = new employee("Urvashi");
newmember.prototype = Object.create(mymember.prototype)
var emp1 = new newmember("Urvashi");
console.log(emp1);
