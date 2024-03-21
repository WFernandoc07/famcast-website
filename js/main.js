//Variables and constants
const navbar = document.querySelector("#navbar")
const menuOpen = document.querySelector("#menu_open")
const menuClose = document.querySelector("#menu_close")



//Design events
// Click on hamburguer menu
menuOpen.addEventListener("click", () => {
  navbar.classList.add("navbar")
})

menuClose.addEventListener("click", () => {
  navbar.classList.remove("navbar")
})