
let x = sessionStorage.getItem("passQ")
document.getElementById("got").innerHTML=`Your result is : ${x} out of 20`;
if ( x > 9){
    document.getElementById("col").style.backgroundColor="green"
    document.getElementById("state").innerHTML="Congrats , success the exam"
    document.getElementById.apply("icon2").style.display="block"
    document.getElementById.apply("failicon").style.display="none"


} else{
    document.getElementById("col").style.backgroundColor="red"
    document.getElementById("state").innerHTML="Failed the exam!"
    document.getElementById.apply("icon2").style.display="none"
    document.getElementById.apply("failicon").style.display="block"
    
}


function toWel() {
    window.location.href = "/project2-js/homePage/home.html";
    document.getElementById("btn").style.display = "none";
};

toWel();