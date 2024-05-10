"use strict";
// import
//document.body.style.overflowX = "hidden";

const colors = [
    "rgb(61, 0, 0)",
    "rgb(235, 125, 23)",
    "rgb(247, 203, 11)",
    "rgb(138, 221, 82)",
    "rgb(82, 221, 186)",
    "rgb(82, 170, 221)",
    "rgb(124, 82, 221)",
    "rgb(189, 82, 221)",
    "rgb(221, 82, 191)",
];
const doors = document.querySelector(".doors__body");
const screens = document.querySelectorAll(".screen");
const timer = document.querySelector(".timer");
const timeEl = document.querySelector("#time"); // todo rename it to not hav confusing situation
const audioBtn = document.querySelector(".audio");
const audio = document.querySelector("audio");
const firstRacer = document.querySelector(".img__racer");
const explosion = document.querySelector(".explosion");
console.log(audio);
document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest(".audio")) {
        target.classList.add("__active");
        audio.play();
        startTimer();
    }
});

/*
console.log(startBtn);
startBtn.addEventListener("click", (event) => {
    event.preventDefault();
    screens[0].classList.add("up");
});*/

let time = 21;

/*
timeListBtn.addEventListener("click", (e) => {
    if (e.target.closest(".time-btn")) {
        time = parseInt(e.target.getAttribute("data-time"));
        screens[1].classList.add("up");
    }
});
*/
function startTimer() {
    setInterval(decreaseTime, 1000);
    setTime(time);
}
/*
board.addEventListener("click", (event) => {
    if (event.target.closest(".circle")) {
        points++;

        event.target.remove();
        spawnRandomCircle();
    }
});*/

function decreaseTime() {
    if (time === 0) {
        timer.classList.add("__finish");
        doors.classList.add("__active");
        firstRacer.classList.add("__active");
        explosion.classList.add("__active");
        screens[1].classList.add("up");
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }

        setTime(current);
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}
/*
function finishGame() {
    timeEl.parentNode.remove();
    board.innerHTML = `<h2 class ='score'>Your points : <span class ='primary'>${points}</span></h2>`;
}

function spawnRandomCircle() {
    const circle = document.createElement("div");
    const size = getRandomNumber(10, 60);
    const { width, height } = board.getBoundingClientRect();
    const x = getRandomNumber(60, width - size);
    const y = getRandomNumber(60, height - size);
    circle.style.top = `${x}px`;
    circle.style.left = `${y}px`;
    circle.style.background = getRandomColor();
    circle.className = "circle";
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomColor() {
    const colorIndex = Math.floor(Math.random() * colors.length);
    return colors[colorIndex];
}*/
