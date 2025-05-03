const signin = document.querySelector(".Login")
const leaderboard = document.querySelector(".leaderboard")
const github = document.querySelector('.github')
const playAsGuest = document.querySelector('.playasguest')
const dropdown = document.getElementById('dropdownItem')
let usernameList
const accounts = fetch('http://localhost:8080/users').then(response => response.json()).then(data => {
    usernameList = data.map(user => user.username)
}).catch(error => {
    console.log(error)
})
const input = document.getElementById("search-input")


//Allows users to search for accounts - removes spaces from input before searching to prevent edge case issues
//Checks user input against list of users
input.addEventListener("keyup", ((e)=>{
    const inputNoSpaces = input.value.replace(/\s/g, '')
    if(e.key == "Enter"){
        console.log(usernameList)
        if(usernameList.includes(inputNoSpaces)) {
            window.location.href = "http://localhost:8080/account/" + input.value
        } else{alert("User does not exist!")}
    }
}))


//Redirects user to the associated page for each button they press
if(localStorage.getItem("Username") !== null){
    signin.href = "http://localhost:8080/account"
    signin.innerHTML = "Account"
}


github.addEventListener('click', () =>{
    window.open("https://github.com/John-Roy123", "_blank")
})