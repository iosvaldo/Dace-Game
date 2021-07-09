function refreshPage(){
    window.location.reload();
}

var randomNum1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomDiceImg = "dice" + randomNum1 + "purple.png"; // dice1purple.png - dice6purple.png;

var randomImgSrc = "images/" + randomDiceImg; // images/dice1purple.png - dice6purple.png;

var img1 = document.querySelectorAll("img")[0]

img1.setAttribute("src", randomImgSrc);


var randomNum2 = Math.floor(Math.random() * 6) + 1;

var randomImgSrc2 = "images/dice" + randomNum2 + "purple.png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);


// if Player 1 wins
if(randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = " Player 1 Wins! <br> 🚩 " ;
}
else if (randomNum2 > randomNum1) {
  document.querySelector("h1").innerHTML = " Player 2 Wins! <br> 🚩 "
}
else {
  document.querySelector("h1").innerHTML = "It's a Draw!"
}
