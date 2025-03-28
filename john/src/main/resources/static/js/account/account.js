const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const gameButton = document.querySelector('.open-modal');
const leaderboard = document.getElementById('leaderboard')
const mainElement = document.querySelector('.friends-list-container');
const highScore = document.getElementById('hsNumber')
const averageScore = document.getElementById('avgNumber')
const usernameHeader = document.querySelector('.account-header')
const logoutbtn = document.getElementById('logout')
let username = localStorage.getItem("Username")
let pathUsername = window.location.pathname

if(username == null){
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
//console.log("/topScore/"+username)

async function checkUserExists(){
  try {
    const fetchAccount = fetch("/users/" + username + "/exists", {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
        .then(data => {
          console.log("Boolean value from server:", data);
          if (data === false) {
            window.location.href = "http://localhost:8080/login"
          }
        })
  } catch (error) {
    console.error("Error Setting High Score", error);
  }
}

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
async function setAverageScore() {
  try {
    const fetchAvScore = fetch("/averageScore/" + username, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    })
    averageScore.innerHTML = await (await fetchAvScore).text();
  } catch (error) {
    console.error("Error Setting Average Score", error);
  }
}

setHighScore()
setAverageScore()



gameButton.addEventListener('click', ()=>{
  window.location.href = "http://localhost:8080/game";
});

leaderboard.addEventListener('click', ()=>{
  window.location.href = "http://localhost:8080/leaderboard"
})

logoutbtn.addEventListener('click', ()=>{
  localStorage.removeItem("Username")
  //document.cookie = "JSESSIONID=0; expires Thu, 18 Dec 2000 12:00:00 UTC"
  window.location.href = "http://localhost:8080/login"
})

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});