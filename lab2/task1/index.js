var userInput = prompt("please enter your word.");
var userAnswer = confirm("do you want case sensitive");
var userWord;
if (userAnswer == false) {
  userWord = userInput.toLowerCase();
} else {
  userWord = userInput;
}

var finalWord = userWord.split("");
console.log(finalWord);
var n = finalWord.length;
for (var i = 0; i < n; i++) {
  console.log(finalWord[i]);
  if (finalWord[i].toString() == finalWord[n - i - 1].toString()) {
    document.getElementById("result").innerHTML = userWord;
    continue;
  } else {
    document.getElementById("result").innerHTML = "wrong";
    break;
  }
}
