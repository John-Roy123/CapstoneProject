const loginheader = document.querySelector('.login-header')
const usernamein = document.querySelector(".username")
const passwordin = document.querySelector(".password")
const passwordconfirm = document.querySelector(".confirm-password")
const submitBtn = document.querySelector(".login-button")
const transformBtn = document.querySelector(".page-transform-button")
const minitext = document.querySelector(".minitext")

let pageState = true;


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

constructLogIn()

transformBtn.addEventListener('click', ()=>{
    pageState ? constructRegPage() : constructLogIn()
})

submitBtn.addEventListener('click', ()=>{
    console.log("Logged in")
})

