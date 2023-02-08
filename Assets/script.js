var timerEl = document.getElementById("countdown")
function countdown() {
    var timeLeft = 60;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        if (timerEl.textContent) = '';
        clearInterval(timeInterval);
        displayMessage();
    }
  }, 1000);

countdown();