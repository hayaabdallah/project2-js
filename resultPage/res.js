
let x = sessionStorage.getItem("passQ")
document.getElementById("got").innerHTML=`Your result is : ${x} out of 20`;
if ( x > 9){
  
    document.getElementById("col").style.backgroundColor="white";
    document.getElementById("state").innerHTML="Congratulations! You success the exam";
    document.getElementById("finish").style.backgroundColor="green";
    document.getElementById("show_result").style.backgroundColor="green";
    document.getElementById("image2").style.display='block';
    document.getElementById("image").style.display='none';
    

} else{
    document.getElementById("col").style.backgroundColor="white";
    document.getElementById("state").innerHTML="Failed the exam!";
    document.getElementById("finish").style.backgroundColor="red";
    document.getElementById("show_result").style.backgroundColor="red";
    document.getElementById("image").style.display='block';
    document.getElementById("image2").style.display='none';
  
}



function toWel() {
    window.location.href = "file:///C:/Users/User/project2-js/finishPage/finish.html"
     document.getElementById("btn").style.display = "none";
};

function toshow()
{

    window.location.href = "file:///C:/Users/User/project2-js/showPage/show.html"

}