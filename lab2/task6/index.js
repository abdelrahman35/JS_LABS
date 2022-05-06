var newWindow = window.open("", "", "width=150,height=150");
newWindow.moveBy(10, 10);
newWindow.focus();
newWindow.resizeTo(250, 250);

newWindow.document.write("typing message");

setTimeout(function () {
  newWindow.close();
}, 3000);
