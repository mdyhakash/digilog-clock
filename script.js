const hoursCircle = document.getElementById("hours-circle");
const minutesCircle = document.getElementById("minutes-circle");
const secondsCircle = document.getElementById("seconds-circle");

const hoursDot = document.getElementById("hours-dot");
const minutesDot = document.getElementById("minutes-dot");
const secondsDot = document.getElementById("seconds-dot");

const hoursText = document.getElementById("hours");
const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");
const periodText = document.getElementById("period");

let isGreen = true;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let period = hours >= 12 ? "PM" : "AM";
  periodText.textContent = period;

  if (hours > 12) {
    hours -= 12;
  }
  if (hours === 0) {
    hours = 12;
  }

  const hoursRotation = (hours / 12) * 360;
  const minutesRotation = (minutes / 60) * 360;
  const secondsRotation = (seconds / 60) * 360;

  if (seconds === 0) {
    isGreen = !isGreen;
  }
  const secondsFill = isGreen ? "#04fc43" : "#fff";
  const secondsEmpty = isGreen ? "#fff" : "#04fc43";

  hoursCircle.style.background = `conic-gradient(#ff2972 ${hoursRotation}deg, #fff ${hoursRotation}deg)`;
  minutesCircle.style.background = `conic-gradient(#fff ${minutesRotation}deg, #fee800 ${minutesRotation}deg)`;
  secondsCircle.style.background = `conic-gradient(${secondsFill} ${secondsRotation}deg, ${secondsEmpty} ${secondsRotation}deg)`;

  hoursText.textContent = String(hours).padStart(2, "0");
  minutesText.textContent = String(minutes).padStart(2, "0");
  secondsText.textContent = String(seconds).padStart(2, "0");
}

setInterval(updateClock, 1000);

updateClock();
