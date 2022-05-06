var newWindow = window.open("windowNew.html", "", "width=150,height=150");
newWindow.moveBy(10, 10);
newWindow.focus();
newWindow.resizeTo(250, 250);

function moveNewWindow() {
  newWindow.moveBy(10, 10);
  newWindow.focus();
}
var moving = setInterval(moveNewWindow, 2000);

function stopMoving() {
  clearInterval(moving);
}
