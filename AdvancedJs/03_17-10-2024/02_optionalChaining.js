let person = {
    firstname: "Urvashi",
    lastname: "Bhavsar",
    address: {
        city: "Surat",
        pincode: "395001"
    },
    // fullname : function() {}
}
let fname = person?.firstname;
let mno = person?.mobile;
console.log(fname);
console.log(mno);

let add = person.address?.city;
let mark = person.address?.landmark;
console.log(add);
console.log(mark);


