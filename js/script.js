"use strict";
// import
const calcBtn = document.querySelector(".size-calc__btn");
const calcScreen = document.querySelector(".size-calc__screen");
let screenHeight = 0;
let screenWidth = 0;
calcBtn.addEventListener("click", (e) => {
    const target = e.target;
    target.classList.toggle("__active");
    calcScreen.classList.toggle("__active");
    screenHeight = document.documentElement.clientHeight;
    screenWidth = document.documentElement.clientWidth;
    calcScreen.innerHTML = `
    <span>Your sizes :</span> 
    <span>ScreenHeight : ${screenHeight} px,</span> 
    <span>ScreenWidth : ${screenWidth} px</span>`;
    console.log(screenHeight);
});
