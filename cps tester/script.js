'use strict';
let click = 0;
let timeLeft = 0;
document.querySelector('.restart').addEventListener('click', function () {
  // Timer
  let timerAmount = Number(document.querySelector('.amount-timer').value);
  document.querySelector('.timer-number').textContent = timerAmount;
  click = 0;

  document.querySelector('.total-clicks-number').textContent = click;

  timeLeft = timerAmount;
  let downloadTimer = setInterval(function () {
    timeLeft--;
    document.querySelector('.timer-number').textContent = timeLeft;
    if (timeLeft <= 0) {
      // END of timer
      clearInterval(downloadTimer);

      document.querySelector('.total-clicks-number').textContent = click;
      document.querySelector('.click').classList.add('hidden');

      console.log(click);

      // return (timeLeft = 0);
    }
  }, 1000);

  // total clicks
  document.querySelector('.click').classList.remove('hidden');

  document.querySelector('.click').onclick = function () {
    click++;
    // console.log(click);
    let cps = click / timerAmount;
    document.querySelector('.total-clicks-number').textContent = click;
    document.querySelector('.cps-number').textContent =
      Math.round(cps * 100) / 100;
    return cps;
  };

  // CPS
});
