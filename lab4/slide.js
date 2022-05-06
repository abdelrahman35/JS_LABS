var myImage = document.images[0];
var i = 1;

function nextPhoto() {
  if (i < 3) {
    i++;
  } else {
    i = 1;
  }
  myImage.src = `./img/${i}.jpeg`;
}
var mytimer = setInterval(function () {
  if (i < 3) {
    i++;
  } else {
    i = 1;
  }
  myImage.src = `./img/${i}.jpeg`;
}, 2000);

function stopShow() {
  clearInterval(mytimer);
}
function prevPhoto() {
  if (i > 1) {
    i--;
  } else {
    i = 3;
  }
  myImage.src = `./img/${i}.jpeg`;
}
