"use strict"
document.addEventListener("DOMContentLoaded",()=>{
    let burger = document.querySelector(".header__burger")
    let menu = document.querySelector(".header__navigation")
    let logo = document.querySelector(".header__name")
    if (window.screen.width <= 900){
        menu.classList.add("hidden")
    }
    burger.addEventListener("click", ()=>{
        menu.classList.toggle("hidden")
        logo.classList.toggle("hidden")
    })
})