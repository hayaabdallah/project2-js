let email = document.getElementById("mail");
let signPass = document.getElementById("pss");
let emch = document.getElementById("emCh");
let pach = document.getElementById("paCh");


//make sure that email and password matches the values in local storage
function sign() {
    if (email.value === localStorage.getItem("email")) {
        emch.style.display = "none";
            if (signPass.value === localStorage.getItem("password")) {
                pach.style.display = "none";
                window.location.href = "file:///C:/Users/User/project2-js/welcomingPage/welcome.html";
            } else {
                pach.style.display = "inline";
            } 
        } else {
            emch.style.display = "inline";
            }
};