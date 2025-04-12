const signin = document.querySelector(".signin")
const leaderboard = document.querySelector(".leaderboard")
const github = document.querySelector('.github')
const playAsGuest = document.querySelector('.playasguest')

signin.addEventListener('click', ()=>{
    window.location.href = "http://localhost:8080/login"
})
playAsGuest.addEventListener('click', ()=>{
    localStorage.removeItem("Username")
    window.location.href = "http://localhost:8080/game"
})
leaderboard.addEventListener('click', ()=>{
    window.location.href = "http://localhost:8080/leaderboard"
})
github.addEventListener('click', () =>{
    window.open("https://github.com/John-Roy123", "_blank")
})