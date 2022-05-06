window.onload = function () {
  var username = document.querySelector("input[id='name1']");
  var userage = document.getElementById("age");

  var usergender = document.getElementsByName("gender");
  var userColor = document.getElementById("color");
  var endDate = new Date();
  endDate.setMonth(endDate.getMonth() + 1);
  document.getElementById("btn").onclick = function () {
    document.cookie = `username=${username.value}`;
    document.cookie = `userage=${userage.value}`;
    for (i = 0; i < usergender.length; i++) {
      if (usergender[i].checked) {
        var userGenderValue = usergender[i].value;
      }
    }
    document.cookie = `usergender=${userGenderValue}; expires=${endDate}`;
    document.cookie = `usercolor=${userColor.value}; expires=${endDate}`;
  };
};
