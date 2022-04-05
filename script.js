var halfButton;
var halfInput;
var fortuneButton;
var fortuneInput;
var fortuneOutput;
var outputText;
var restyleButton;

var firstNames = ["Juicy","Hairy","Wet","Big","Short"]
var lastNames = ["Mama","Papa","Cat","Granny","Dog"]

document.addEventListener("DOMContentLoaded", function(){
  halfButton = document.getElementById("half-button");
  halfInput = document.getElementById("half-input");
  fortuneButton = document.getElementById("fortune-button");
  fortuneInput = document.getElementById("fortune-input");
  fortuneOutput = document.getElementById("fortune-output");
  outputText = document.getElementById("output-text");
  restyleButton = document.getElementById("restyle-button");

  halfButton.addEventListener("click", function(){
    var halfOutput = halfInput.value;
    halfNumber(halfOutput);
  });

  fortuneButton.addEventListener("click", function(){
    var fortuneOutput = fortuneInput.value;
    fortune(fortuneOutput);
  });

  restyleButton.addEventListener("click", restyle);
});

function halfNumber(num){
  var halfNum = num / 2;
  alert(halfNum);
  console.log("Half of " + num.toString() + " is " + halfNum.toString());
}

function fortune(name){
  var nickName = name + ", your new nickname is ";
  nickName += firstNames[Math.floor(Math.random() * firstNames.length)];
  nickName += " " + lastNames[Math.floor(Math.random() * lastNames.length)] + ".";
  outputText.innerText = nickName;
}

function restyle(){
  var r1 = Math.random() * 255;
  var g1 = Math.random() * 255;
  var b1 = Math.random() * 255;

  var r2 = Math.random() * 255;
  var g2 = Math.random() * 255;
  var b2 = Math.random() * 255;

  var bgColor = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
  var fColor =  "rgb(" + r2 + "," + g2 + "," + b2 + ")";
  fortuneOutput.style.backgroundColor = bgColor;
  fortuneOutput.style.color = fColor;
  var alignments = ["left", "right", "center"];
  outputText.style.fontSize = (Math.random() * (6 - 2) + 2)+ "vw";
  outputText.style.textAlign = alignments[Math.floor(Math.random() * firstNames.length)];

}
