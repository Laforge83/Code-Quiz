var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var evaluateAnswer = document.getElementById("evaluateAnswer")
var answersEl = document.getElementById("answer")
var startBtn = document.getElementById("startBtn")
var questionEl = document.getElementById("question")

var timeLeft = 120;
var timeInterval;
var level = 0

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
  questionEl.textContent = questionBank[level].question
  answersEl.innerHTML = ""
  for (let i = 0; i < questionBank[level].selection.length; i++) {
    const element = questionBank[level].selection[i];
    var btn = document.createElement("button");
    btn.setAttribute("value", element)
    btn.textContent = element
    btn.onclick = handleAnswerClick;
    answersEl.append(btn)
  }
}

function handleAnswerClick(event) {
  var value = event.target.value
  console.log("my value is ", evaluateAnswer);
  evaluateAnswerChoice(value)
}

function evaluateAnswerChoice(value) {
  if (value === questionBank[level].answer) {
    evaluateAnswer.textContent = "Correct!";
  } else {
    timeLeft -= 10;
    evaluateAnswer.textContent = "Incorrect!";
  }
  score = timeLeft;
  level++;
  displayQuestion();
}

startBtn.addEventListener("click", function () {
  countdown();
  displayQuestion();
})
