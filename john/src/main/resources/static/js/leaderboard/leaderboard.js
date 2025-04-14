
const mainElement = document.querySelector('main')
const playButton = document.getElementById('play')
const addButton = document.getElementById('add')
const multButton = document.getElementById('mult')
let leaderboardList;
let serverCall = "/getLeaderboard"

//Fetches the top 10 games from the server then populates the leaderboard with the username and score of the game
async function populateLeaderboard(){
    try {
        const leaderboard = (await fetch(serverCall, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },

        })).text()
        leaderboardList = JSON.parse(await leaderboard)

    }catch(error){
        console.error(error)
    }

    for(let i = 0; i<leaderboardList.length; i++){
        const val = leaderboardList[i]
        val.gameMode = val.gameMode.replace("mult", "multiplication")
        val.gameMode = val.gameMode.replace("add", "addition")
        const newDiv = document.createElement('div')
        newDiv.textContent = `Player ${val.accountUsername} -- Score: ${val.score} -- Mode: ${val.gameMode}`
        newDiv.id = `Rank${i} Player`
        newDiv.classList.add('leaderboard-score')
        mainElement.appendChild(newDiv)
    }
}

populateLeaderboard()

playButton.addEventListener('click', ()=>{
    window.location.href = "http://localhost:8080/game"
})
addButton.addEventListener('click', ()=>{
    mainElement.innerHTML = ""
    serverCall = "/getLeaderboard/add"
    populateLeaderboard()
})
multButton.addEventListener('click', ()=>{
    mainElement.innerHTML = ""
    serverCall = "/getLeaderboard/mult"
    populateLeaderboard()
})

