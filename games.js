
var buttonColors =["red", "blue", "green", "yellow"];

var gamePattern =[];

//generating random tile number 

function nextSequence(){
    var randomNumber = Math.floor(Math.random() *4) ;
    
    var randomChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChoosenColor);
}



