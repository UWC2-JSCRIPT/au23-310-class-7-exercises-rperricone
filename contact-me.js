addEventListener("change", (event) => {
    const selected = $("#contact-kind option:selected")
//console.log($("#contact-kind option:selected").val())
if (selected.val() === "job"){
    //add visiable to class job

        $("#job").removeClass("hide");
    
    // hide talk
    $("#talk").addClass("hide");
console.log("job")
} else if(selected.val() === "talk") {
    // show talk 
    $("#talk").removeClass("hide");
    // hide job
    $("#job").addClass("hide");
    console.log("talk")
}

});
const validAreaJQ = (inputJQ, min, name='message') =>{
   if(inputJQ.val().trim().length > min){
    inputJQ.removeClass("invalid");
    return true
   }
   else{
    alert(`${name} must be greater than ${min}`)
    inputJQ.addClass("invalid");
    return false
   }
}
const validLength = (input, min, name="text") => {
    //debugger;
 
  if(input.value.trim().length > min) {
   input.parentElement.classList.remove("invalid");
   return true;
 } else {
alert(`${name} must be greater than ${min}`)
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
    alert("Regex does not match for a correct email type")
 emailField.parentElement.classList.add("invalid");
 return false;   
 }
};

$('form').on("submit", (e) => {
    let name = $('#name')[0]
    let email = $('#email')[0]
    let message = $('#message')
    const vemail1 = validateEmail(email)
    const vName = validLength(name, 3, "name")
    if ( validAreaJQ(message,10, 'message') && vName && vemail1 ){
        valid = true;
        alert("Submitted! Thanks!")
     } else{
        valid = false;
        e.preventDefault();
        console.log('Bad input')
     }
 
});
