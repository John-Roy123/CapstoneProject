const gameButton = document.querySelector('.game');
const leaderboard = document.getElementById('leaderboard')
const highScore = document.getElementById('hsNumber')
const averageScore = document.getElementById('avgNumber')
const usernameHeader = document.querySelector('.account-header')
const logoutbtn = document.getElementById('logout')
const menubtn = document.getElementById('mainmenu')
let username = localStorage.getItem("Username")
let pathUsername = window.location.pathname


//piece of logic to determine if A: User is logged in and B: if user is looking at their own or someone else's account
//if not logged in, they are redirected to the login page and if they are logged in, it shows the account details of
// the account in the URL (defaults to their account)
if(username == null && pathUsername == "/account" || pathUsername == "/account/"){
  window.location.href = "http://localhost:8080/login"
}else if(pathUsername != "/account"){
  pathUsername = pathUsername.replace("/account/","")
  username = pathUsername
  logoutbtn.style.display = 'none';
  checkUserExists()
}
else{
  username = localStorage.getItem("Username")
}


usernameHeader.innerHTML = username

//Checks if the username in the URL exists in the database, and if not redirects to the login page
async function checkUserExists(){
  try {
    const fetchAccount = fetch("/users/" + username + "/exists", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    }).then(response => {
      if (!response.ok) {throw new Error("Network response was not ok");}
      return response.json();
    })
        .then(data => {
          if (data === false) {window.location.href = "http://localhost:8080/login"}
        })
  } catch (error) {
    console.error("Error Setting High Score", error);
  }
}

//Fetch request to the server that pulls the high score from the database then assigns it to the innerHTML of the high score label
async function setHighScore() {
  try {
    const fetchHighScore = fetch("/topScore/" + username, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    })
    highScore.innerHTML = await (await fetchHighScore).text();
  } catch (error) {
    console.error("Error Setting High Score", error);
  }
}

//Fetch request to the server that pulls the average score from the database then assigns it to the innerHTML of the average score label
async function setAverageScore() {
  try {
    const fetchAvScore = fetch("/averageScore/" + username, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    })
    averageScore.innerHTML = await (await fetchAvScore).text();
  }
  catch (error) {console.error("Error Setting Average Score", error);}
}

setHighScore()
setAverageScore()


menubtn.addEventListener('click', ()=>{
  window.location.href = "http://localhost:8080/";
});
gameButton.addEventListener('click', ()=>{
  window.location.href = "http://localhost:8080/game";
});

leaderboard.addEventListener('click', ()=>{
  window.location.href = "http://localhost:8080/leaderboard"
})

logoutbtn.addEventListener('click', ()=>{
  localStorage.removeItem("Username")
  window.location.href = "http://localhost:8080"
})