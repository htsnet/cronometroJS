const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisencondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetarBtn = document.querySelector("#resetarBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', resumeTimer);
resetarBtn.addEventListener('click', resetTimer);


function startTimer() {
    interval = setInterval(() => {
        if (!isPaused) {
            milliseconds += 10;
            if (milliseconds === 1000) {
                seconds++;
                milliseconds = 0;
            }
            if (seconds === 60) {
                minutes ++;
                seconds = 0;
            }

            minutesEl.textContent = formatTime(minutes);
            secondsEl.textContent = formatTime(seconds);
            millisencondsEl.textContent = formatMilliseconds(milliseconds);
        }
    }, 10);

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";

}

function pauseTimer() {
    isPaused = true;
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'block';
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
    return time < 100 ? `${time}`.padStart(3, '0') : time;
}

function resumeTimer() {
    isPaused = false;
    pauseBtn.style.display = 'block';
    resumeBtn.style.display = 'none';
}

function resetTimer() {
    isPaused = false;
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    millisencondsEl.textContent = '000';
    pauseBtn.style.display = 'none';
    resumeBtn.style.display = 'none';
    startBtn.style.display = "block";
}