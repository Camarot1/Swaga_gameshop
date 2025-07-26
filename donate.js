"use strict"
let postButton = document.querySelector('.form__button')
let moneyGive = document.querySelector('.input__money')
let moneyPost = document.querySelector('.end__result')
const buttonChange = document.querySelectorAll(".button__changeMoney");
let currentCurrency = "₽";
buttonChange.forEach(button => {
    button.addEventListener("click", () => {
        currentCurrency = button.dataset.currency;
        updateMoneyDisplay();
    });
});
function updateMoneyDisplay() {
    const amount = parseFloat(moneyGive.value) || 0;
    const hasPromo = document.querySelector('.input__promo').value !== '';
    const multiplier = hasPromo ? 1.06 : 1.1;
    let result = Math.ceil(amount * multiplier) + currentCurrency;
    moneyPost.textContent = result;
    postButton.textContent = `Вы заплатите: ${result}`;
}
document.addEventListener('DOMContentLoaded', () => {
    moneyGive.addEventListener('input', updateMoneyDisplay);
});
let instruction = document.querySelector('.ins')
let faq = document.querySelector('.faq')
let textIns = document.querySelector('.drop__instruction')
let textFaq = document.querySelector('.drop__faq')
textFaq.classList.add("hidden")
instruction.addEventListener("click", ()=>{
    instruction.classList.toggle("purple")
    faq.classList.toggle("purple")
    textIns.classList.toggle("hidden")
    textFaq.classList.toggle("hidden")
})
faq.addEventListener("click", ()=>{
    instruction.classList.toggle("purple")
    faq.classList.toggle("purple")
    textIns.classList.toggle("hidden")
    textFaq.classList.toggle("hidden")
})