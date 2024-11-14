class myparent {
    msg() {
        console.log("this is parent class");
    }
}
class child extends myparent {
    msg() {
        console.log("this is child class");
    }
}
class subchild extends myparent {
    msg() {
        console.log("this is sub child class");
    }
}
// var par = new myparent();
// par.msg();
// var c = new child();
// c.msg()

var display = [new myparent(), new child(), new subchild()];
display.forEach(e => {
    e.msg()
})