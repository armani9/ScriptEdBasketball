function promptForPlayerName(playerone){
    playerone= prompt("please enter your name");
    if(playerone.length >15){
        alert ("wow thats a long name");
    }
    return playerone;
} 
function tryTwoPointShot(){
    var num1=Math.random();
    var num2=Math.random();
    if(num1 > 0.2 && num2 > 0.2){
        return(true);
    }
    else {
        return (false)
    }
    
}
function tryThreePointShot(){
    var num1=Math.random();
    var num2=Math.random();
    if(num1 <= 0.2 || num2 >= 0.8){
        return(true);
    }
    else {
        return (false)
    }
    
}
function getShotString(playersname,numberofpoints,splash){
    if(splash){
        return(playersname+"attempted a"+numberofpoints+"pointer.it was good");
    }
    else {
        return (playersname+"attempted a"+numberofpoints+"pointer.it was not good");
    }
    
}
function updateScore(splash,currentnumberofpoints,numberofpointstheshotwasfor){
    if(splash){
        return(currentnumberofpoints+numberofpointstheshotwasfor);
    }
    else {
        return(currentnumberofpoints);
    }
}
function isEndOfGame(score,name){
    if(score>=20){
        alert("the game is over")
        
    }
}
