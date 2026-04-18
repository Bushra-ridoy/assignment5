const loginBtn=document.getElementById("login-btn");
loginBtn.addEventListener('click', ()=>{
    const userName=document.getElementById("user");
    const password=document.getElementById("pass");
    const userValue=userName.value;
    const passValue=password.value;
    if(userValue==="admin" && passValue==="admin123"){
        alert("Login Successful");
        window.location.assign("home.html");
    }
    else{
        alert("Invalid Credential");
        return;
    }
})