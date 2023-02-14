var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var timeLeft = 120;
var timeInterval;
var startBtn = document.getElementById("startBtn")
var level = 0

startBtn.addEventListener("click", function () {
  countdown();
  displayQuestion();
})


function countdown() {

  timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = "Game Over";
      clearInterval(timeInterval);
      // execute the end game function
    }
  }, 1000);
}

function displayQuestion() {
  var questionEl = document.getElementById("question")
  questionEl.textContent = questionBank[level].question
for (let i = 0; i < questionBank[level].selection.length; i++) {
  const element = questionBank[level].selection[i];
  var btn = document.createElement("button");
  btn.textContent = element 
  btn.onclick = answer;
  document.getElementById("answer").append(btn)
}

}

function answer() {
  console.log("button click");
}

