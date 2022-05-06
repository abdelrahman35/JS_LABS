function twoImages() {
  var myImage = document.images[0].cloneNode(true);

  document.body.append(myImage);
  document.images[0].style.position = "absolute";
  document.images[0].style.top = "0";
  document.images[0].style.right = "0";
  document.images[1].style.position = "absolute";
  document.images[1].style.left = "100";
  document.images[1].style.bottom = "100";
}

function oneImage() {
  var containerDiv = document.getElementById("container");
  var secImage = document.images[1];
  document.body.removeChild(secImage);
  document.images[0].style = "";
  containerDiv.style = "";
}
