var comingData = location.search.substring(1, location.search.length);

var dataArray = comingData.split("&");
var finalArray = [];
for (let i = 0; i < dataArray.length; i++) {
  finalArray[dataArray[i].split("=")[0]] = dataArray[i].split("=")[1];
}

console.log(finalArray);

var op = document.getElementById("op");

op.innerHTML = ` welcome Mr.${
  finalArray["fname"] + " " + finalArray["lname"]
}  `;
