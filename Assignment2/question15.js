function displayClock(date) {
  console.log(date.getHours(), ':', date.getMinutes(), ':', date.getSeconds());
}

function startClock() {
  date = new Date();
  setInterval(() => {
    displayClock(date);
    date = new Date();
  }, 1000);
}

startClock();
