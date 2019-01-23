var colors = [];
var pickedColor;
var numSquares = 6;
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpSquares(){
    for(var i = 0; i < squares.length; i++){
        
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "CORRECT!";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try again"
            }
        });
    }
}

function setUpModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}

function reset(){
    colors = generateRandomColors(numSquares);
    //pick new random color
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = " ";
    this.textContent = "New Colors";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none"
        }
    }
    h1.style.backgroundColor = "steelBlue";
}


resetButton.addEventListener("click", function(){
    reset();
    this.textContent = "New Colors";
});

colorDisplay.textContent = pickedColor;



function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }   
    //change color to match given color
}



function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make array
    var arr = []
    //repeat num times
    for(var i =0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor())
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random()* 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random()* 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random()* 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
