// Not a blank document and console script, sorry GitHub for trolling:)
var userInput = document.getElementById("userInput");
var passInput = document.getElementById("passInput");

const $userInput = document.querySelector('#userInput');
const $passInput = document.querySelector('#passInput');

const userHandler = function(inputElmnt) {
  var userValue = inputElmnt.target.value;
  if (userValue.contains("admi")) {
    userInput.maxlength = "8";
  } else {
    userInput.maxlength = "4"; 
  }
}

const passHandler = function(inputElmnt) {
  var passValue = inputElmnt.target.value;
  if (passValue.contains("000a") {
    passInput.maxlength = "9";
  } else {
    passInput.maxlength = "4";
  }
}

$userInput.addEventListener('input', userHandler);
$userInput.addEventListener('propertychange', userHandler);
$passInput.addEventListener('input', passHandler);
$passInput.addEventListener('propertychange', passHandler);
