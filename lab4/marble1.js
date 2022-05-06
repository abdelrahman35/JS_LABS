var myImg = document.images;
var i = 0;

var fun1 = setInterval(function () {
  if (i < 5) {
    myImg[i].src = `./assets/marble1/marble2.jpg`;

    i++;
    console.log(i);
  }
}, 2000);

var j = 0;

var fun2 = setInterval(function () {
  if (j < 5) {
    myImg[j].src = `./assets/marble1/marble1.jpg`;
    j++;
  }
}, 2500);
