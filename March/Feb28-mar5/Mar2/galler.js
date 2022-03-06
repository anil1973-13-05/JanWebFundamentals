var counter = [0,0,0,0,0,0];
var dis =     [0,0,0,0,0,0];


function like(n) {
    counter[n] += 1; 
    var disp = document.getElementById(2*n);
    disp.innerText = counter[n];  
}
function dislike(k) {
    dis[k] -= 1; 
    var disp = document.getElementById(2*k+1);
    disp.innerText = dis[k];
}
