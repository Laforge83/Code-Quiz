var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var evaluateAnswer = document.getElementById("#evaluateAnswer")
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

function evaluateAnswer(event) {
  if (event === questionBank[level].answer) {
    evaluateAnswer.textContent = "Correct!";
  } else {
    timeLeft -= 10;
    evaluateAnswer.textContent = "Incorrect!";
  }
  score = timeLeft;
  level++;
  displayQuestion();
}



// get the value of the answer which was selected. (Very important)
// user the selected answer to check if it is the correct answer
// if it is the correct answer (Compare the selected answer with a value in questionBank in your program because it has the value of the correct answers)
    // decrease the timer by 10
// if it is not the correct answer
    // the timer does not decrease and no further action is required