function swap(){
    var Num1 = parseInt(prompt("Enter first number"));
    var Num2 = parseInt(prompt("Enter first number"));

    var sum = Num1+Num2;
    document.write("Numbers before swapping"+'<br/>');
    document.write(Num1+"<br/>"+Num2+"<br/>");
    Num1    = sum-Num1;
    Num2    = sum-Num2;

    document.write("Numbers after swapping"+'<br/>');
    document.write(Num1);
    document.write("<br/>");
    document.write(Num2); 


}