var randomNum1 = Math.floor(Math.random() * 6 ) + 1;
var randomImg1 = "images/dice" + randomNum1 + ".png" ;
document.querySelector(".img1").setAttribute("src",randomImg1);
var randomNum2 = Math.floor(Math.random() * 6 ) + 1;
var randomImg2 = "images/dice" + randomNum2 + ".png" ;
document.querySelector(".img2").setAttribute("src",randomImg2);
//For player Winning
if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins"
}
else if(randomNum2 > randomNum1){
    document.querySelector("h1").innerHTML  = "Player 2 Wins" 
}
else{
    document.querySelector("h1").innerHTML  = "Draw"
}