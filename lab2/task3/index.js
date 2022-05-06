var userArray = [];

for (var i = 0; i < 5; i++) {
  var userInput = prompt("enter 5 numbers");
  userArray.push(userInput);
}

var val = userArray.map((x) => x);
document.getElementById(
  "first"
).innerHTML = `you have entered the values <em>${val}</em>`;

userArray.sort(function (x, y) {
  return x - y;
});

document.getElementById("asc").innerHTML = `ascending <em>${userArray}</em>`;
var des = [];
userArray.sort(function (x, y) {
  return y - x;
});

document.getElementById("des").innerHTML = `descending  <em>${userArray}</em>`;
