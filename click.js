"use strict"
let button = document.querySelector(".input__button")
let input = document.querySelector(".give")
let output = document.querySelector(".post")
document.addEventListener('DOMContentLoaded', ()=>{
    input.addEventListener('input', ()=>{
        output.value = Math.floor(input.value * 0.94)
    })
    button.addEventListener('click', ()=>{
        let top = document.querySelector('.top__text')
        let bot = document.querySelector('.bot__text')
        if (top.innerHTML == "Заплачу ₽"){
            top.innerHTML = "Получу ₽"
            output.value = Math.floor(input.value * 1.06)
            input.value = Math.floor(input.value * 0.94)
        } else{
            top.innerHTML = "Заплачу ₽"
            output.value = Math.floor(input.value * 0.94)
            
        }
        if (bot.innerHTML == "Получу ₽"){
            bot.innerHTML = "Заплачу ₽"
        } else{
            bot.innerHTML = "Получу ₽"
        }
    })
})
