// class declare
class emp {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    // create method for call value
    empDetails() {
        // return this.id + " " + this.name
        console.log(this.id + " " + this.name);
    }
}
// class access 
// passing value to a object 
var e1 = new emp(1, "Abc");
var e2 = new emp(2, "Xyz")
// console.log(e1);
// console.log(e2);
e1.empDetails()
e2.empDetails()
