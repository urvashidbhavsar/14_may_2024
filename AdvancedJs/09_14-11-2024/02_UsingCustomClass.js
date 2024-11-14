// person => student
// person => employee
// person => family member 

// parent
class person {
    constructor() {
        this.personName = "Urvashi"
    }
}
class student extends person {
    constructor(deg, address) {
        super();
        this.deg = deg;
        this.address = address
    }
}
class employee extends person {
    constructor(desig, sal) {
        super();
        this.desig = desig;
        this.sal = sal
    }
}
var s1 = new student("MCA", "Surat");
console.log(s1.personName + " " + s1.address + " " + s1.deg);

var e1 = new employee("Trainer", "25000");
console.log(e1.personName + " " + e1.desig + " " + e1.sal);
