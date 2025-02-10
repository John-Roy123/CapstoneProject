const newGame = document.querySelector('.btn--new');
const problemLabel = document.querySelector('.label-problem');
const inputLabel = document.querySelector('.current-answer');
const p1ScoreLabel = document.getElementById('score')
const correctSound = new Audio('js/click.mp3');
const timerLabel = document.querySelector('.timer');
let firstNumber = 0;
let secondNumber = 0;
let p1Score = 0;


//Function for the timer at the top of the screen during game
function startTimer(duration) {
    let timer = duration, minutes, seconds;
    const timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerLabel.textContent = minutes + ":" + seconds;
        if(timerLabel.textContent == "00:00"){
            clearInterval(timerInterval);
            gameOver();
            timerLabel.textContent == "01:00"
        }

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);

}

//changes game state to over and changes screen depending on who won
function gameOver(){
    window.removeEventListener('keyup', checkAnswer);
    timerLabel.classList.add('hidden');
    newGame.classList.remove('hidden');
    newGame.addEventListener('click', setGame);
}

//checks if input is correct
function checkAnswer(){
    let answer = firstNumber*secondNumber;
    if(Number(inputLabel.value) === answer){
        correctSound.play();
        p1Score++;
        p1ScoreLabel.textContent = p1Score;
        generateProblem()
        inputLabel.value = "";
    }

}

//creates a new math problem
function generateProblem(){
    firstNumber = Math.trunc(Math.random() * 10 + 1);
    secondNumber = Math.trunc(Math.random() * 10 + 1);
    problemLabel.textContent = `${firstNumber} x ${secondNumber}`;
}

//Sets game back to default state
function setGame(){
    timerLabel.classList.remove('hidden');
    newGame.removeEventListener('click', setGame);
    document.body.classList.add('gameBackground');
    newGame.classList.add('hidden');
    startTimer(60);
    window.addEventListener('keyup', checkAnswer);
    generateProblem();
    inputLabel.textContent = "";
    p1ScoreLabel.textContent = 0;
    p2ScoreLabel.textContent = 0;
    document.getElementById('name--0').textContent = "Player 1";
    document.getElementById('name--1').textContent = "Player 2";
}

setGame();

