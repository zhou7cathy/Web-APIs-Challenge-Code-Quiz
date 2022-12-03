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
    timeEl.textContent = " ";
}

countdown();