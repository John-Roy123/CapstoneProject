const loginheader = document.querySelector('.login-header')
const usernamein = document.querySelector(".username input")
const passwordin = document.querySelector(".password input")
const passwordfield = document.querySelector(".password")
const submitBtn = document.querySelector(".login-button")
const transformBtn = document.querySelector(".page-transform-button")
const minitext = document.querySelector(".minitext")
const regBtn = document.querySelector(".register-button")
const modal = document.querySelector(".modal")
const span = document.querySelector(".close")
const usrReg = document.querySelector(".regusername input")
const pssReg = document.querySelector(".regpassword input")
const pssCfmReg = document.querySelector(".regconfirmpassword input")

async function login(event){
    if(event) event.preventDefault()

    const username = usernamein.value
    const password = passwordin.value

    const data = new URLSearchParams()
    data.append("username", username)
    data.append("password", password)

    try{
        const response = await fetch("/perform_login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: data,
            credentials: "include"
        })
        if(response.redirected && response.url.includes("/login?error")){
            alert("Invalid Login Credentials")
            return
        }
        if(response.ok){
            localStorage.setItem("Username", username)
            window.location.href = "/game"
        } else{
            alert("Invalid login credentials")
        }
    }catch (error){
        console.error("Error loggin in", error);
    }
}
transformBtn.addEventListener("click", function(){
    modal.style.display = "flex"
})

async function addAccount(event){
    if(pssReg.value != pssCfmReg.value){
        alert("Passwords do not match!")
    }

    else{
        try {
            const response = await fetch("/newAccount", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: usrReg.value,
                    password: pssReg.value
                })
            });

            const responseData = await response.json();

            if (response.ok) {
                alert(responseData.message);
            } else {
                alert(responseData.message);
            }
        } catch (error) {
            console.error("Error creating account:", error);
        }
    }
}

function register(){
    modal.style.display = "block";
    document.querySelector(".login-form").removeEventListener()

}

function closeModal(){
    modal.style.display = "none";
    document.querySelector(".login-form").addEventListener("submit", function(event){
        login(event)
    });
}

span.onclick = closeModal
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}
regBtn.addEventListener("click", addAccount)
document.querySelector(".login-form").addEventListener("submit", function(event){
    login(event)
});
