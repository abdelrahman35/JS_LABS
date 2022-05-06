var userInput = prompt("please enter a word to count");
var opDiv = document.getElementById("op");
var input = userInput.split("");
var counter = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i] == "e") {
    counter++;
  }
}

opDiv.innerHTML = `number of e letter is = ${counter}`;
