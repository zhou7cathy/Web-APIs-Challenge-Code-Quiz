
var startButton = document.getElementById('start-quiz')

//When you click on Start Quiz button the startGame function will run
startButton.addEventListener('click', startGame)

function startGame(){
    var timerEl = document.getElementById('countdown');

    function countdown() {
    var timeLeft = 100;
   
    var timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft;

    if(timeLeft === 0) {
      clearInterval(timeInterval);
      displayMessage();
    }

  }, 1000);
    }
    function displayMessage() {

    }
    countdown();

    document.getElementById("home").style.display = "none";
    document.getElementById("quiz-container").style.display = "flex";
    document.getElementById("quiz-container").style.flexDirection = "column";
    document.getElementById("choice-container").style.display = "flex";
    document.getElementById("choice-container").style.flexDirection = "column";
}

function nextQuestion(){


}

function selectAnswer(){


}





