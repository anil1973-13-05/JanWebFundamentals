function popup(n) {
    var a = document.getElementById(n);

    console.log(n);
    if(a.classList.contains("specifications")){
        a.classList.remove("specifications");
        a.classList.add("initial");

    }else {
        a.classList.remove("initial");
        a.classList.add("specifications");
    }
   

}