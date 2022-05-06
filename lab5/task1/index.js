window.onchange = function () {
  var fontFamilyRadio = document.getElementsByName("fontFamily");
  for (i = 0; i < fontFamilyRadio.length; i++) {
    if (fontFamilyRadio[i].checked) {
      var fontFamilyRadioValue = fontFamilyRadio[i].value;
    }
  }
  var textAlignRadio = document.getElementsByName("textAlign");
  for (i = 0; i < textAlignRadio.length; i++) {
    if (textAlignRadio[i].checked) {
      var textAlignRadioValue = textAlignRadio[i].value;
    }
  }

  var lineHeightRadio = document.getElementsByName("lineHeight");
  for (i = 0; i < lineHeightRadio.length; i++) {
    if (lineHeightRadio[i].checked) {
      var lineHeightRadioValue = lineHeightRadio[i].value;
    }
  }

  var textIndentRadio = document.getElementsByName("textIndent");
  for (i = 0; i < textIndentRadio.length; i++) {
    if (textIndentRadio[i].checked) {
      var textIndentRadioValue = textIndentRadio[i].value;
    }
  }

  var textTransformRadio = document.getElementsByName("textTransform");
  for (i = 0; i < textTransformRadio.length; i++) {
    if (textTransformRadio[i].checked) {
      var textTransformRadioValue = textTransformRadio[i].value;
    }
  }

  var textDecorationRadio = document.getElementsByName("textDecoration");
  for (i = 0; i < textDecorationRadio.length; i++) {
    if (textDecorationRadio[i].checked) {
      var textDecorationRadioValue = textDecorationRadio[i].value;
    }
  }
  var letterSpacingRadio = document.getElementsByName("letterSpacing");
  for (i = 0; i < letterSpacingRadio.length; i++) {
    if (letterSpacingRadio[i].checked) {
      var letterSpacingRadioValue = letterSpacingRadio[i].value;
    }
  }

  var myParagraph = document.getElementById("container");
  myParagraph.style.fontFamily = fontFamilyRadioValue;
  myParagraph.style.textAlign = textAlignRadioValue;
  myParagraph.style.lineHeight = lineHeightRadioValue;
  myParagraph.style.textIndent = textIndentRadioValue;
  myParagraph.style.textTransform = textTransformRadioValue;
  myParagraph.style.textDecoration = textDecorationRadioValue;
  myParagraph.style.letterSpacing = letterSpacingRadioValue;
};
