var userArray = [];

for (var i = 0; i < 3; i++) {
  if (userArray[1] == 0) {
    alert("you can not divide by zero");
  } else {
    var userInput = prompt("enter 3 numbers");
    userArray.push(userInput);
  }
}

var multiplyOP = 1;

for (let i = 0; i < userArray.length; i++) {
  multiplyOP *= userArray[i];
}

document.getElementById(
  "mp"
).innerHTML = `the multiply of 3 values is <em>${multiplyOP}</em> `;

var addingOP = 0;

for (let i = 0; i < userArray.length; i++) {
  addingOP += parseInt(userArray[i]);
}

document.getElementById(
  "ad"
).innerHTML = `the sum of 3 values is <em>${addingOP}</em>`;

var divsionOP = 1;

for (let i = 0; i < userArray.length; i++) {
  divsionOP = parseInt(userArray[i]) / divsionOP;
}
document.getElementById(
  "di"
).innerHTML = `the division of 3 values is <em>${divsionOP}</em>`;
