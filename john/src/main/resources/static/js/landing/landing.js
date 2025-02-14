const signin = document.querySelector(".signin")
const leaderboard = document.querySelector(".leaderboard")
const github = document.querySelector('.github')



signin.addEventListener('click', ()=>{
    window.location.href = "localhost:8080/login"
})
leaderboard.addEventListener('click', ()=>{
    window.location.href = "localhost:8080/leaderboard"
})
github.addEventListener('click', () =>{
    window.open("https://github.com/John-Roy123", "_blank")
})