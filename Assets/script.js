var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

function countdown() {
  var timeLeft = 120;

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = "Game Over";
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

countdown();
