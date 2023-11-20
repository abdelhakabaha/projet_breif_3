
function validation ()
{
let name = document.getElementById("nom");
let email = document.getElementById("email");
let password = document.getElementById("password");
    var  user_email= /^[^\s@]+@[^\s@]\.[^\s@]$/;
    var  user_password= /^[0-9A-Z]$/;
  if(name === ""){
    alert("entrer votre nom ");
  }
 if( ! user_email.test(email)) {
    alert("donner incorecte"); 
return false;
 }
if (!user_password.test(password) && password==""){
    alert("au minimem 8 chifre en mote de passe")
}
return false;
}


let qst = document.getElementsByClassName("rectangle");
let rep = document.getElementsByClassName("réponse");

for(let i = 0; i < qst.length; i++) {
    qst[i].addEventListener("click", ()=> {
        for(let idx = 0; idx < qst.length; idx++) {
            rep[idx].style.display = "none";
        }
        console.log(i);
        rep[i].style.display = "flex";
    });
}