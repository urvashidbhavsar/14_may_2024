var person = {
    first: "Urvashi",
    last: "Bhavsar"
}
var per_details = {
    details: function () {
        return this.first + " " + this.last
    }
}
console.log(per_details.details.call(person));
console.log(per_details.details.apply(person));

