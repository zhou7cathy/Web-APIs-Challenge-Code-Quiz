var startButton = document.querySelector('#start-quiz')
var questionContainer = document.querySelector('#question-container')
var choiceContainer = document.querySelector('#choice-container')
var homeContainer = document.querySelector('#home')
var quizContainer = document.querySelector("#quiz-container")
var option1 = document.querySelector('#option1')
var option2 = document.querySelector('#option2')
var option3 = document.querySelector('#option3')
var option4 = document.querySelector('#option4')
var result = document.querySelector('#result')
var submitBtn = document.querySelector("#submit-Btn")
var userForm = document.querySelector("#user-form")

var questionIndex = 0;
var scores = 0;
var timeLeft = 100;

//When you click on Start Quiz button the startGame function will run
startButton.addEventListener('click', startGame)
//Go to next question after each click
var nextButton = option1
nextButton.addEventListener('click', nextQuestion)
var nextButton = option2
nextButton.addEventListener('click', nextQuestion)
var nextButton = option3
nextButton.addEventListener('click', nextQuestion)
var nextButton = option4
nextButton.addEventListener('click', nextQuestion)

function startGame(){

    countdown();

    //Style of question and answers after click event
    homeContainer.style.display = "none";
    userForm.style.display = "none";
    submitBtn.style.display = "none";
    quizContainer.style.display = "flex";
    quizContainer.style.flexDirection = "column";
    choiceContainer.style.display = "flex";
    choiceContainer.style.flexDirection = "column";
    
    nextQuestion()
 
}

function countdown() {
    //Timer
    var timerEl = document.querySelector('#countdown');
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time: " + timeLeft;

        if(timeLeft <= 0) {
            timerEl.textContent = "Time: " + 0;
            timeLeft = 100;
            questionIndex = 0;
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
   
    userForm.style.display = "flex";
    userForm.style.margin = "10px 0";
    submitBtn.style.display = "flex";
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

function renderScores() {
    homeContainer.style.display = "none";
    document.querySelector(".container").style.display = "none";
    quizContainer.style.display = "none";
    document.querySelector("#score-container").style.display = "block";
    //use for loop to append userScore
    var userScore = JSON.parse(localStorage.getItem("userScore"));
    document.querySelector('#score-list').innerHTML = '';
    if(userScore!== null) {
        for (let i = 0; i < userScore.length; i++){
            let list = document.createElement('li');
            list.innerText=userScore[i]['name'] + "    " + userScore[i]['score'] ;
            document.querySelector('#score-list').appendChild(list);
        }
    } else {
        document.querySelector('#score-list').innerHTML = 'No scores yet.';
    }
    clearInput()
}

function clearInput(){
    userForm.reset();
}

var viewScoreBtn = document.querySelector('.view-scores')
viewScoreBtn.addEventListener("click", function(event) {
    event.preventDefault()
    renderScores();

});

var goBackBtn = document.querySelector('#go-back-btn')
goBackBtn.addEventListener("click", function(event) {
    document.querySelector("#score-container").style.display = "none";
    document.querySelector(".container").style.display = "flex";
    homeContainer.style.display = "block";

});

var clearBtn = document.querySelector('#clear-btn')
clearBtn.addEventListener("click", function(event) {
    localStorage.clear();    
    document.querySelector('#score-list').innerHTML = '';
});

submitBtn.addEventListener("click", function(event) {
    event.preventDefault();

    document.querySelector('#countdown').textContent = "Time: " + timeLeft;
    var userName = document.querySelector("#user-name").value;
    //Retrieve local storage
    var userScore = JSON.parse(localStorage.getItem("userScore"));

    if(userScore!== null) {
        userScore.push({
            name: userName,
            score: scores,
        })
    } else {
        userScore = [
            {
                name: userName,
                score: scores,
            }
        ]
    }
    
    //store array of object in local storage
    localStorage.setItem("userScore",JSON.stringify(userScore));
    
    scores = 0;
    renderScores();
  });

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



