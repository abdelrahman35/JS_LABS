var userInput = prompt("enter circle raduis ");
var area = 2 * Math.PI * userInput;

alert(`circle area is ${area}`);

var userInput2 = prompt("enter value to calculate square roor");

var squareRoot = Math.sqrt(userInput2);
alert(`square root of ${userInput2} is ${squareRoot}`);

var userInput3 = prompt("enter angle ");
var angle = Math.cos(userInput3);
document.getElementById("div").innerHTML = angle;
