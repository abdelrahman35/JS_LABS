var myBtn = document.getElementById("Btn");

myBtn.onclick = function () {
  var radioBtn = document.getElementsByName("r");
  var textMsg = document.getElementById("msg").value;

  for (i = 0; i < radioBtn.length; i++) {
    if (radioBtn[i].checked) {
      var radioBtnValue = radioBtn[i].value;
    }
  }
  var selectedImage = document.getElementById(radioBtnValue).src;

  document.cookie = `image=${selectedImage}`;
  document.cookie = `message=${textMsg}`;

  var result = document.cookie.split(";");
  var myArray = [];
  for (var i = 0; i < result.length; i++) {
    myArray.push(result[i].trim());
  }
  var lastArray = [];
  for (var i = 0; i < myArray.length; i++) {
    lastArray[myArray[i].split("=")[0]] = myArray[i].split("=")[1];
  }
  var newWindow = window.open("messageWindow.html", "", "width=550,height=550");
  newWindow.document.write(
    `<img src="${selectedImage}" />
    <br>
    <div>${lastArray["message"]}</div>
    `
  );
};
