
var startButton = document.getElementById('start-quiz')
var questionContainerElement = document.getElementById('question-container')
var answerElement = document.getElementById('choice-container')

//When you click on Start Quiz button the startGame function will run
startButton.addEventListener('click', startGame)

function startGame(){

    //Timer
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

    //Style of question and answers after click event
    document.getElementById("home").style.display = "none";
    document.getElementById("quiz-container").style.display = "flex";
    document.getElementById("quiz-container").style.flexDirection = "column";
    document.getElementById("choice-container").style.display = "flex";
    document.getElementById("choice-container").style.flexDirection = "column";
    
    nextQuestion()


}

function nextQuestion(){
 
}


function selectAnswer(){


}

var questions = [
    {
        question:'Commonly used data types DO Not include:',
        answer: [
            {text: 'strings', correct: true},
            {text: 'booleans', correct: true},
            {text: 'alerts', correct: false },
            {text: 'strings', correct: true},
        ]
    },
    {
        question:'Commonly used data types DO Not include:',
        answer: [
            {text: 'strings', correct: true},
            {text: 'booleans', correct: true},
            {text: 'alerts', correct: false },
            {text: 'strings', correct: true},
        ]

    }
]



