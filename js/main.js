let nav = document.querySelector("nav");
let aloqaBtn = nav.children[1].children[3];
let aloqaClose = document.getElementById("aloqaClose");

let aloqaBox = document.getElementById("aloqa");
aloqaBox.classList.add("d-none");
aloqaBtn.addEventListener("click", (e) => {
    aloqaBox.classList.remove("d-none");
})


aloqaClose.addEventListener("click", (e) => {
    aloqaBox.classList.add("d-none");
})

let mobileMenu = document.querySelector(".mobile_menu");
mobileMenu.classList.add("d-none");
let burger = document.getElementById("burger");
burger.addEventListener("click", (e) => {
    mobileMenu.classList.toggle("d-none");
})