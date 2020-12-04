var clickMe = document.querySelector('button');
var bcg = document.querySelector('body');
var hexText = document.querySelector('span');

clickMe.addEventListener('click', hexaFunction);

function hexaFunction(){
    var colors = ["0","1","2","3","4","5","6","7","8","9","A", "B", "C", "D", "E", "F"];
    var hexcode = '';
    for(let i = 0; i<6; i++){
        let random = Math.floor(Math.random()*colors.length);
        hexcode += colors[random];
    }
    
    document.body.style.backgroundColor = '#'  +hexcode;
    document.getElementById("hex-code").innerHTML = hexcode;
}
