
// Assignment 1: -> On your registration form. You need to have password and confirm password. 
// When I click on the submit button, 
// check if both of them are same or not. If they same, show ok, otherwise show some error message.

function check(){

    var password = document.getElementById("pass");
    password = password.value;

    var confirm = document.getElementById("confirm");
    confirm = confirm.value;
    var output = document.getElementById("out");


    if( password == confirm){
        output.innerText = "Matched";
        
    }

    else{
        output.innerText = "Not Matched";
        
    }

}