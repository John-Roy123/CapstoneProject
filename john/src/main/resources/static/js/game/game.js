const newGame = document.querySelector('.btn--new');
const problemLabel = document.querySelector('.label-problem');
const inputLabel = document.querySelector('.current-answer');
const p1ScoreLabel = document.getElementById('score')
const timerLabel = document.querySelector('.timer');
const current = document.querySelector('.current')
const addGameBtn = document.querySelector('.btn--add')
const multiplyGameBtn = document.querySelector('.btn--multiply')
const subtractGameBtn = document.querySelector('.btn--subtract')
const divideGameBtn = document.querySelector('.btn--divide')
const returnBtn = document.querySelector('.btn--return')
const correctSound = new Audio("audio/CorrectAnswer.mp3")
const incorrectSound = new Audio("audio/WrongAnswer.wav")
let firstNumber = 0;
let secondNumber = 0;
let p1Score = 0;
let username;
let gameMode;


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

function gameOver(){
    window.removeEventListener('keyup', checkAnswer)
    inputLabel.value = ""
    timerLabel.classList.add('hidden')
    newGame.classList.remove('hidden')
    returnBtn.classList.remove('hidden')
    newGame.addEventListener('click', selectMode)
    if(p1Score !== 0) {
        submitScore()
    }
    returnBtn.addEventListener('click', () => {
        window.location.href = "http://localhost:8080/account"
    })
}

//checks if input is correct
function checkAnswer(){
    let answer

    if(gameMode == "multiplication"){ answer= firstNumber*secondNumber;}
    else if(gameMode == "addition"){answer = firstNumber+secondNumber;}
    else if(gameMode == "subtraction"){answer = firstNumber-secondNumber;}
    else{answer = firstNumber/secondNumber}

    if(Number(inputLabel.value) === answer){
        correctSound.play();
        p1Score++;
        p1ScoreLabel.textContent = p1Score;
        generateProblem()
        inputLabel.value = "";
    }else if(answer.toString().length <= inputLabel.value.length){
        inputLabel.value = ""
        incorrectSound.play()
    }

}

//creates a new math problem
function generateProblem(){
    firstNumber = Math.trunc(Math.random() * 25 + 1);
    secondNumber = Math.trunc(Math.random() * 10 + 1);

    if(gameMode == "mult"){
        problemLabel.textContent = `${firstNumber} x ${secondNumber}`
    }
    else if(gameMode == "add"){
        problemLabel.textContent = `${firstNumber} + ${secondNumber}`
    }
    else if(gameMode == "subtraction"){
        if(firstNumber<secondNumber){generateProblem()}
        problemLabel.textContent = `${firstNumber} - ${secondNumber}`
    }
    else if(gameMode == "division"){
        if(firstNumber%secondNumber !== 0){generateProblem()}
        problemLabel.textContent = `${firstNumber} ÷ ${secondNumber}`
    }
}

//Sets game back to default state
function setGame(){
    username = localStorage.getItem("Username")
    if(username == null){
        username = "Guest"
    }
    returnBtn.classList.add('hidden')
    addGameBtn.classList.add('hidden')
    multiplyGameBtn.classList.add('hidden')
    divideGameBtn.classList.add('hidden')
    subtractGameBtn.classList.add('hidden')
    problemLabel.classList.remove('hidden')
    timerLabel.classList.remove('hidden')
    p1ScoreLabel.classList.remove('hidden')
    current.classList.remove('hidden')
    newGame.removeEventListener('click', setGame);
    document.body.classList.add('gameBackground');
    newGame.classList.add('hidden');
    startTimer(20);
    window.addEventListener('keyup', checkAnswer);
    generateProblem();
    inputLabel.value = "";
    p1ScoreLabel.textContent = 0;
}

//POSTs game to server which then inserts it into the database
async function submitScore(){
    try{
        await fetch('http://localhost:8080/postGame',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                accountUsername: username,
                score: p1Score,
                gameMode: gameMode
            })
        })
    }catch(error){
        ("Error submitting score: " + error)
    }
}


function selectMode(){
    addGameBtn.classList.remove('hidden')
    multiplyGameBtn.classList.remove('hidden')
    timerLabel.classList.add('hidden')
    document.body.classList.add('gameBackground')
    p1ScoreLabel.classList.add('hidden')
    problemLabel.classList.add('hidden')
    current.classList.add('hidden')
    newGame.classList.add('hidden')
    returnBtn.classList.add('hidden')

    divideGameBtn.classList.remove('hidden')
    subtractGameBtn.classList.remove('hidden')

    addGameBtn.addEventListener('click', ()=>{
        gameMode = "addition"
        setGame()
    })
    subtractGameBtn.addEventListener('click', ()=>{
        gameMode = "subtraction"
        setGame()
    })
    divideGameBtn.addEventListener('click', ()=>{
        gameMode = "division"
        setGame()
    })
    multiplyGameBtn.addEventListener('click', ()=>{
        gameMode = "multiplication"
        setGame()
    })
}
selectMode();

