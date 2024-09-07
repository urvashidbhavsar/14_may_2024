// function showMenu() {
//     let navbar = document.querySelector(".nav");
//     navbar.classList.toggle("nav-show")
// }

$(document).ready(function () {
    $("#btn").click(function () {
        $(".nav").toggleClass("nav-show")
    })
})