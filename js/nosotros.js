const burger = document.querySelector(".burger-button-plate")
const menu = document.querySelector(".cs-navbar")
const cabecera = document.querySelector(".cabecera")

burger.addEventListener('click',() => {
    toggleMenu()
})

function toggleMenu(){
    burger.classList.toggle("burger-button-active");
    menu.classList.toggle("cs-navbar-list-active")
}
document.addEventListener('click', (event) => {
    if(burger.classList.contains("burger-button-active") 
        && menu.classList.contains("cs-navbar-list-active")
        && !cabecera.contains(event.target)) {
                burger.classList.toggle("burger-button-active");
                menu.classList.toggle("cs-navbar-list-active")
    }
  });