const loginBtn=document.getElementById("login-btn");
loginBtn.addEventListener('click', ()=>{
    const userName=document.getElementById("user");
    const password=document.getElementById("pass");
    const userValue=userName.value;
    const passValue=password.value;
    if(userValue==="admin" && passValue==="admin123"){
        alert("Login Successful");
    }
    else{
        alert("Invalid Credential");
        return;
    }
})