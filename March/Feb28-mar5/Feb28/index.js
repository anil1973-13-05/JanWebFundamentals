// n = parseInt(prompt());

// if(isNaN(n)){
//     alert("enter a valid number");
// }

// else{
//     for(var i = 1; i <= n; i++){

//         if( i % 3 == 0 && i % 5 != 0){
//             document.write("Fizz"+"<br/>");
//         }
//         else if( i % 5 == 0 && i % 3 != 0) {
           
//             document.write('Buzz'+"<br/>");
//         }
//         else if( i % 3 == 0  && i % 5 == 0) { // 3 and 5 fizzbuzz, 3*5=15

//              document.write("FizzBuzz"+"<br/>");
//         }
//         else{
            
//             document.write(i);
//             document.write("<br/>");
//         }
//     }
// }
// Assignment 1: -> Create a page where I have 1 button. -> When I click on that button. Open a prompt. (Ask for a number). -> That means, do parseInt. (If it is NaN, then show some kind of alert or something). -> If is a number. ---> Print (document.write) FizzBuzz Series upto that number. input is 20 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz 16 17 Fizz 19 Buzz

// If number is divisible by 3, print Fizz (Foo)
// If number is divisible by 5, print Buzz (Bar)
// If number is divisible by 3 and 5, both, print FizzBuzz (FooBar)
// Else, print the number

//var n = parseInt(prompt("enter the number"));
function input(){
    var n  = parseInt(prompt())
     if(isNaN(n)){
        alert("enter number only");
    }
    for(i =1; i<=n; i++){
    
        if(i % 3 == 0 && i % 5 != 0) {
            document.write("<span style='color:red;'>fizz </span>"+"<br/>");
            
        }
        else if(i % 5 == 0 && i % 3 != 0) {
            document.write("buzz"+"<br/>");
        }
        else if(i % 5 == 0 && i % 3 == 0){
            document.write("fizz buzz"+"<br/>");
        }
        else{
            document.write(i);
            document.write("<br/>")
    
        }
    }
}
 

