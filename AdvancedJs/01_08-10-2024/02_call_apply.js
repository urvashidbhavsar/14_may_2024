var person = {
    first: "Urvashi",
    last: "Bhavsar"
}
var per_details = {
    details: function () {
        return this.first + " " + this.last
    },
    city: function (mycity) {
        return this.first + " " + this.last + " " + mycity
    }
}

console.log(per_details.details.call(person));
console.log(per_details.details.apply(person));

console.log(per_details.city.call(person, "Surat"));
console.log(per_details.city.apply(person, ["Surat"]));
