const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const newYears = '1 Jan 2021';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const secondsLeft = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(secondsLeft/60/60/24);
    const hours = Math.floor(secondsLeft/60/60) % 24;
    const minutes = Math.floor(secondsLeft/60) % 60;
    const seconds = Math.floor(secondsLeft) % 60;

    daysElement.innerHTML = formatTime(days);
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);