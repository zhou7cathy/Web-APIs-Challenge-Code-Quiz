var startButton = document.getElementById('start-quiz')
var questionContainer = document.getElementById('question-container')
var choiceContainer = document.getElementById('choice-container')
var option1 = document.getElementById('option1')
var option2 = document.getElementById('option2')
var option3 = document.getElementById('option3')
var option4 = document.getElementById('option4')
var result = document.getElementById('result')
var questionIndex = 0;
var scores = 0;
var timeLeft = 100;

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

function countdown() {
    //Timer
    var timerEl = document.getElementById('countdown');
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;

        if(timeLeft <= 0) {
            timerEl.textContent = "Time: " + 0;
            clearInterval(timeInterval);
            displayMessage();
        }

    }, 1000);
}

function displayMessage() {
    choiceContainer.style.display = "none";
    let h1text = 'All done !'
    questionContainer.innerText = h1text;
    questionContainer.style.display = "flex";
    let resultText = 'Your final score is ' + scores + '.'
    result.innerText = resultText;
   
}

function startGame(){
   
    countdown();

    //Style of question and answers after click event
    document.getElementById("home").style.display = "none";
    document.getElementById("quiz-container").style.display = "flex";
    document.getElementById("quiz-container").style.flexDirection = "column";
    document.getElementById("choice-container").style.display = "flex";
    document.getElementById("choice-container").style.flexDirection = "column";
    
    nextQuestion()
 
}


function nextQuestion(event){
    //get result from attribute
    if(event) {
        let myElement = event.target;
        var resultText;
        if(myElement.getAttribute('correct') == 'true'){
            resultText = 'Correct!'
            scores = scores + 20;
        } else {
            resultText = 'Wrong!'
            timeLeft = timeLeft - 10;
        }
        result.textContent = resultText;
    }
    //get questions and options from array 
    if(questionIndex < questions.length){
        
        let question1 = questions[questionIndex].question;
        let answer1 = questions[questionIndex].answer[0];
        let answer2 = questions[questionIndex].answer[1];
        let answer3 = questions[questionIndex].answer[2];
        let answer4 = questions[questionIndex].answer[3];
        
        questionContainer.innerText = question1;
        option1.innerText = answer1.text;
        option1.setAttribute('correct', answer1.correct)
        option2.innerText = answer2.text;
        option2.setAttribute('correct', answer2.correct)
        option3.innerText = answer3.text;
        option3.setAttribute('correct', answer3.correct)
        option4.innerText = answer4.text;
        option4.setAttribute('correct', answer4.correct)
        
        questionIndex++;
    } else {
        timeLeft = 0;
    }
}

//Store questions in an array of object
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



