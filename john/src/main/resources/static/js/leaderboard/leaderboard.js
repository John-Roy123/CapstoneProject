
const mainElement = document.querySelector('main')
const button = document.querySelector('button')
let leaderboardList;


async function populateLeaderboard(){
    try {
        const leaderboard = (await fetch("/getLeaderboard", {
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
        const newDiv = document.createElement('div')
        newDiv.textContent = `Player ${val.accountUsername} -- Score: ${val.score}`
        newDiv.id = `Rank${i} Player`
        newDiv.classList.add('leaderboard-score')
        mainElement.appendChild(newDiv)
    }
}




populateLeaderboard()

button.addEventListener('click', ()=>{
    window.location.href = "http://localhost:8080/game"
})

