var startButton = document.getElementById('start-quiz')
var questionContainer = document.getElementById('question-container')
var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')
var option3 = document.getElementById('option3')
var option4 = document.getElementById('option4')
var index = 0;

//When you click on Start Quiz button the startGame function will run
startButton.addEventListener('click', startGame)
//Go to next question after each click
var nextButton = document.getElementById('option1')
nextButton.addEventListener('click', nextQuestion)
var nextButton = document.getElementById('option2')
nextButton.addEventListener('click', nextQuestion)
var nextButton = document.getElementById('option3')
nextButton.addEventListener('click', nextQuestion)
var nextButton = document.getElementById('option4')
nextButton.addEventListener('click', nextQuestion)

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


    let question1 = questions[index].question;
    let answer1 = questions[index].answer[0].text;
    let answer2 = questions[index].answer[1].text;
    let answer3 = questions[index].answer[2].text;
    let answer4 = questions[index].answer[3].text;

    questionContainer.innerText = question1;
    option1.innerText = answer1;
    option2.innerText = answer2;
    option3.innerText = answer3;
    option4.innerText = answer4;
 
    index++;

    selectAnswer()
}


function selectAnswer(){


}

var questions = [
    {
        question:'Commonly used data types DO Not include:',
        answer: [
            {text: 'strings', correct: false},
            {text: 'booleans', correct: false},
            {text: 'alerts', correct: true },
            {text: 'strings', correct: false},
        ]
    },
    {
        question:'The condition in an if/else statement is enclosed with____.',
        answer: [
            {text: 'quote', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'parenthesis', correct: true },
            {text: 'square brackets', correct: false},
        ]

    },
    {
        question:'Array in JavaScript can be used to store____.',
        answer: [
            {text: 'numbers and strings', correct: false},
            {text: 'other arrays', correct: false},
            {text: 'booleans', correct: false},
            {text: 'all of the above', correct: true},
        ]
    },
    {
        question:'Sting value must be enclosed with _____ when being assigned to variables.',
        answer: [
            {text: 'commas', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'quotes', correct: true},
            {text: 'parenthesis', correct: false},
        ]
    },
    {
        question:'A very useful tool used during development and debugging for printing content to the debugger is:',
        answer: [
            {text: 'JavaScript', correct: false},
            {text: ' terminal/bash', correct: false},
            {text: 'for loop', correct: false},
            {text: 'console.log', correct: true},
        ]
    }

]



