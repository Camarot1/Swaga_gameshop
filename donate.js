"use strict"
let postButton = document.querySelector('.form__button')
let moneyGive = document.querySelector('.input__money')
let moneyPost = document.querySelector('.end__result')
document.addEventListener('DOMContentLoaded', ()=>{
    moneyGive.addEventListener('input', ()=>{
        let result = Math.floor(moneyGive.value * 1.1) + "₽"
            moneyPost.innerHTML = result
            postButton.innerHTML = `Вы заплатите: ${result}`
            if (document.querySelector('.input__promo').value != ''){
                moneyPost.innerHTML = Math.floor(moneyGive.value * 1.06) + "₽"
                postButton.innerHTML ="Вы заплатите:" + Math.floor(moneyGive.value * 1.06) + "₽"
            }
    })
})