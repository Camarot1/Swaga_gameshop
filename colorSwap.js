"use strict"
let relevant = document.querySelector(".relevant")
let finished = document.querySelector(".finished")

document.addEventListener("DOMContentLoaded", ()=>{
    let buttons = document.querySelectorAll(".order__button")
    buttons.forEach(button =>{
        button.addEventListener("click" , function(){
            buttons.forEach( btn => btn.classList.remove('active'))
            this.classList.add('active');
        })
    })
})