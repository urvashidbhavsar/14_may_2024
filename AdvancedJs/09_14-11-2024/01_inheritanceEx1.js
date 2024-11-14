// var d  =  new Date()
class mycurrentTime extends Date {
    constructor() {
        super();
    }
}
var dt = new mycurrentTime();
console.log(dt.getDate());
console.log(dt.getMonth() + 1);
console.log(dt.getFullYear());

