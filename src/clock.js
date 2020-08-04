setInterval(setClock, 1000); // Every 1000ms we're going to call this function

const hourHand = document.querySelector("[data-hour-hand]"); // Selecting Data attributes
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
  const currentDate = new Date(); // Gets current date
  const secondsRatio = currentDate.getSeconds() / 60; // Returns the seconds of the time / 60, this tells us far our seconds hands need to be
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60; // secondsRatio is a percentage of a minute
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12; // divide by 12 since there's 12 hours on the clock
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock(); // This will immediately set the clock to the correct time
