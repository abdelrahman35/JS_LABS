var leftImage = document.images[0];
var rightImage = document.images[1];
var topImage = document.images[2];
var isMoving = true;
var timer;
function startFun() {
  timer = setInterval(function () {
    if (parseInt(window.getComputedStyle(document.images[2]).top) < 50) {
      isMoving = true;
    } else if (
      parseInt(window.getComputedStyle(document.images[2]).top) > 500
    ) {
      isMoving = false;
    }
    if (!isMoving) {
      topImage.style.top = parseInt(window.getComputedStyle(topImage).top) - 5;
      leftImage.style.left =
        parseInt(window.getComputedStyle(leftImage).left) - 5;
      rightImage.style.right =
        parseInt(window.getComputedStyle(rightImage).right) - 5;
    } else {
      rightImage.style.right =
        parseInt(window.getComputedStyle(rightImage).right) + 5;
      topImage.style.top = parseInt(window.getComputedStyle(topImage).top) + 5;
      leftImage.style.left =
        parseInt(window.getComputedStyle(leftImage).left) + 5;
    }
  }, 25);
}

function stopFun() {
  clearInterval(timer);
}
