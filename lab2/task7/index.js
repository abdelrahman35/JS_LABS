var newWindow = window.open("", "", "width=150,height=150");
newWindow.moveBy(10, 10);
newWindow.focus();
newWindow.resizeTo(250, 250);

newWindow.document.write(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda adipiscilaudantium libero esse dolorum dicta ipsa non minima odio reiciendis,temporibus quis dolores? Iusto porro eum exercitationem totam explicaboducimus!"
);
newWindow.document.write(
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda adipiscilaudantium libero esse dolorum dicta ipsa non minima odio reiciendis,temporibus quis dolores? Iusto porro eum exercitationem totam explicaboducimus!"
);
setInterval(function () {
  newWindow.scrollBy(50, 50);
}, 1000);
