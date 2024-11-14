class myparent {
    msg() {
        console.log("this is parent class");
    }
}
class child extends myparent {

}
// access parent method through child class
var c = new child();
c.msg()