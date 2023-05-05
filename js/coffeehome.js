const accordion =  document.querySelector(".accordion")

accordion.addEventListener('click', (e) => {
    const activePanel = e.target.closest(".accordion-panel")
    if (!activePanel) return
    toggleAccordion(activePanel)
    // console.log(activePanel)
})

function toggleAccordion(panelToActivate){
    const buttons = panelToActivate.parentElement.querySelectorAll("button")
    const contents = panelToActivate.parentElement.querySelectorAll(".accordion-content")
    buttons.forEach((button) => {
        button.setAttribute("aria-expanded",false)
    })
    contents.forEach((content) => {
        content.setAttribute("aria-hidden",true)
    })
    panelToActivate.querySelector('button').setAttribute("aria-expanded",true)
    panelToActivate.querySelector('.accordion-content').setAttribute("aria-hidden",false)
    // console.log(buttons)
}

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