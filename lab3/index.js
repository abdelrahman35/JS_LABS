var myNumber = [];
var val = document.getElementById("Answer");

function EnterNumber(myval) {
  if (myNumber.length < 2) {
    myNumber.push(myval);
  } else if (myNumber.length > 2) {
    myNumber.pop().push(myval);
  }
}

var myOperator;
function EnterOperator(operatorValue) {
  myOperator = operatorValue;
}

var result;
function EnterEqual() {
  var val = document.getElementById("Answer");
  result = eval(myNumber[0] + myOperator + myNumber[1]);
  val.placeholder = `${myNumber[0]} ${myOperator}  ${myNumber[1]} = ${result}`;
}
function EnterClear() {
  myNumber = [];
  myOperator = "";
  var val = document.getElementById("Answer");
  val.placeholder = "";
}
