function myObj(_start, _end, _step) {
  var start = _start;
  var end = _end;
  var step = _step;
  var myArray = [];
  function pushArray() {
    for (var i = start; i <= end; i += step) {
      myArray.push(i);
    }
  }

  pushArray.call(this);

  this.getArray = function () {
    return myArray;
  };

  this.setArray = function (val) {
    myArray[myArray.length] = val;
  };

  this.endArray = function () {
    return end;
  };

  this.popArray = function () {
    return this.getArray().pop();
  };
}

var myObj1 = new myObj(1, 300, 55);
