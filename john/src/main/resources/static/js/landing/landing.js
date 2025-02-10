const signin = document.querySelector(".signin")
const leaderboard = document.querySelector(".leaderboard")
const github = document.querySelector('.github')



signin.addEventListener('click', ()=>{
    window.location.href = "http://127.0.0.1:5500/signin"
})
leaderboard.addEventListener('click', ()=>{
    window.location.href = "http://127.0.0.1:5500/leaderboard"
})
github.addEventListener('click', () =>{
    window.open("https://github.com/John-Roy123", "_blank")
})