const startStopBtn = document.getElementById("startStopBtn");
const resetBtn = document.getElementById('resetBtn');

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let seconds = 0;
let minutes = 0;
let hours = 0;

let timerStatus = "stopped";
let timerInterval = null;

const stopWatch = () => {
    seconds++;
    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    if(minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    if(hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes +":" + leadingSeconds;
}

startStopBtn.addEventListener('click', () => {
    console.log('clicked')
    if(timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
        timerStatus = "stopped";
    }
})


resetBtn.addEventListener('click', () => {
    window.clearInterval(timerInterval);
    hours = "0";
    minutes = "0";
    seconds = "0";
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`
    // timerStatus = "stopped";
    document.getElementById('timer').innerText = "00:00:00";

})
