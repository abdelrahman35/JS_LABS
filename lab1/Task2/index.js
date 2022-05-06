var sum = 0;
var userNumber = 0;
while (int != 0 && sum < 100) {
  userNumber = prompt("enter your numbers, it will stop at zero");
  var int = parseInt(userNumber);
  sum = sum + int;
}

document.write(`the result is: <strong>${sum}</strong>`);
