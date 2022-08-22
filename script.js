"use strict";

const subscribeButton = document.querySelector("#subscribe");
const closeModalButton = document.querySelector(".close-modal");
const submitButton = document.querySelector(".submit-button");

const modal = document.querySelector("#modal");
const form = document.querySelector("#form");

const successMessageBox = document.querySelector('#success-submit');
const errorMessageBox = document.querySelector('#error-submit');

// EVENT HANDLERS
subscribeButton.addEventListener('click', ()=> {
    modal.classList.toggle('active');
    form.classList.toggle('active-drop');
})

closeModalButton.addEventListener("click", (e) => {
    e.preventDefault()
    modal.classList.toggle('active')
    form.classList.toggle('active-drop');
    form.reset();
})  

submitButton.addEventListener("click", (e)=> {
    e.preventDefault()
    if(
        errorMessageBox.classList.contains('error') || 
        successMessageBox.classList.contains('success')
    )
    return
    if (!form.reportValidity()) {
        errorMessageBox.classList.toggle("error");
        setTimeout(() => {
            errorMessageBox.classList.toggle('error');
        }, 1000);
    } else {
        successMessageBox.classList.toggle("success");
        setTimeout(() => {
            successMessageBox.classList.toggle("success");
        }, 1000);
        form.reset();
    }
})

// FUNCTIONS

const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");

const updateCountdown = (day, hour, min, sec) => {
    daysElement.innerText = day;
    hoursElement.innerText = hour;
    minutesElement.innerText = min;
    secondsElement.innerText = sec;
}

// getting time in Miliseconds
let staticDate = new Date("September 20, 2022 12:24:00").getTime();

const startTimer = () => {
    let currentDate = new Date().getTime();
    let remainingDate = staticDate - currentDate;

    let days = String(Math.floor((remainingDate / (1000 * 60 * 60 * 24)))).padStart(2, "0");
    let hours = String(Math.floor((remainingDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    let minutes = String(Math.floor((remainingDate % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    let seconds = String(Math.floor((remainingDate % (1000 * 60)) / 1000)).padStart(2, "0");

    updateCountdown(days, hours, minutes, seconds);
}

window.onload = () => {
    setInterval(startTimer, 1000);
}