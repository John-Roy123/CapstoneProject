const mainElement = document.querySelector('main')
const button = document.querySelector('button')


for(let i = 1; i <= 10; i++){
    const newDiv = document.createElement('div')
    newDiv.textContent = `Player ${i} -- Score: ${Math.random}`
    newDiv.id = `Rank${i} Player`
    newDiv.classList.add('leaderboard-score')
    mainElement.appendChild(newDiv)
}

button.addEventListener('click', ()=>{
    window.location.href = "http://localhost:8080/game"
})