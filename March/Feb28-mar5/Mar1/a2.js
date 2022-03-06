// Assignment 2: Have 2 number input fields and 1 button.
//  When I click on the button, show the sum of both the numbers.
//  SHowing in the HTML only, NOT alert or console.

function sum(){

    var first = document.getElementById("number1");
    first = first.value;

    var second = document.getElementById("number2");
    second = second.value;
    first = parseInt(first);
    second = parseInt(second);
    
    sum = first + second;
    
    var out = document.getElementById("output");
     out.innerText = sum;
}