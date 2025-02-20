const loginheader = document.querySelector('.login-header')
const usernamein = document.querySelector(".username input")
const passwordin = document.querySelector(".password input")
const passwordconfirmin = document.querySelector(".confirm-password input")
const username = document.querySelector(".username")
const passwordfield = document.querySelector(".password")
const passwordconfirm = document.querySelector(".confirm-password")
const submitBtn = document.querySelector(".login-button")
const transformBtn = document.querySelector(".page-transform-button")
const minitext = document.querySelector(".minitext")

let pageState = true;
let givenUsername;
let password;



function constructLogIn(){
    pageState = true;
    loginheader.innerHTML = "Log In"
    passwordconfirm.classList.add('hidden')
    submitBtn.innerHTML = "Log In"
    transformBtn.innerHTML = "Sign Up"
    minitext.innerHTML = "Don't have an account yet? Register here:"
}

function constructRegPage(){
    pageState = false;
    loginheader.innerHTML = "Register"
    passwordconfirm.classList.remove('hidden')
    submitBtn.innerHTML = "Sign Up"
    transformBtn.innerHTML = "Log In"
    minitext.innerHTML = "Actually, I already have an account!"
}

async function registerAcc(){
    if(!(passwordin.value == passwordconfirmin.value)){
        return;
    }
    const newPassword = passwordin.value
    const newUsername = usernamein.value

    try{
        const newAccount = await fetch('http://localhost:8080/newAccount', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: newUsername,
                password: newPassword
            })
        }).then(response =>{
            if(!response.ok){
                throw new Error('HTTP Error, Status: ' + response.status)
            }
            return response.json()
        }).then(responseData =>{
            console.log("Success: ", responseData)
        }).catch(error => {
            console.error("Error: ", error)
        })
        await console.log("account created")
    }

        catch(error){
            console.log("Error creating account " + error)
        }

}
async function login() {
    try {
        password = (await fetch('http://localhost:8080/users/' + givenUsername + "/password"))
        password = await password.text()

        if(password === passwordin.value){
            console.log("Confirmed")
        }
        else{
            console.log("Incorrect Username or Password")
        }
    } catch (error) {
        console.error("Error")
    }
}



constructLogIn()

transformBtn.addEventListener('click', ()=>{
    pageState ? constructRegPage() : constructLogIn()
})

submitBtn.addEventListener('click', async () => {
    givenUsername = usernamein.value

    if(givenUsername === "") return

    try {
        const account = await fetch('http://localhost:8080/users/' + givenUsername)
        let accountExists
        await fetch('http://localhost:8080/users/'+givenUsername+"/exists").then(response => response.json()).then(data =>{
            accountExists = data
        })
        if(accountExists !==  pageState) {
            return
        }
        if (pageState) {
            login()
        } else {
            registerAcc()
        }
    }catch(error){
        console.error("Error getting username: ", error)
    }


})

