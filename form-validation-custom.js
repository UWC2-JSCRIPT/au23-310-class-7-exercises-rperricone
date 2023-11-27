const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const form = document.getElementById("connect-form");
//const button = document.getElementById("b")
 let valid = false;
 //check if an input meets a length requirement 
 const validLength = (input, min) => {
    //debugger;
  if(input.value.trim().length > min) {
   input.parentElement.classList.remove("invalid");
   return true;
 } else {
alert("Bad input for Length")
  input.parentElement.classList.add("invalid"); 
  return false;      
 }
}

const validateEmail = (emailField) => {
 const re = /\w+@\w+\.\w+/;
  if(re.test(emailField.value.trim())){
  emailField.parentElement.classList.remove("invalid");
  return true;   
 }else {
    alert("Bad input for Length")
 emailField.parentElement.classList.add("invalid");
 return false;   
 }
};

form.addEventListener("submit", (e) => {
    if (validLength(firstName, 3) && validLength(lastName, 3) && validateEmail(email)){
        valid = true;
        alert("Submitted! Thanks!")
     } else{
        valid = false;
        e.preventDefault();
        console.log('Bad input')
     }
 
});



