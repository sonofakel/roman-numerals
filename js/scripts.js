var values = ['1', '5', '10', '50', '100', '500', '1000'];
var roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
var romTwo = 'II';
var romThree = 'III';
var romFour = 'IV';
var romSix = 'VI';
var romSeven = 'V' + romTwo;
var romEight = 'V' + romThree;
var romNine = roman[0] + roman[2];
var romEleven = roman[2] + roman[0];
var romTwelve = roman[2] + romTwo;
var romThirteen = roman[2] + romThree;
var romFourteen = roman[2] + romFour;
var romFifteen = roman[2] + roman[1];
var romSixteen = roman[2] + romSix;
var romSeventeen = roman[2] + romSeven;
var romEighteen = roman[2] + romEight;
var romNineteen = roman[2] + romNine;
var romTwenty = roman[2] + roman[2];

var romanNumeral = function(number) {
  // this for loop will equal even values and their roman counterpart
  for (i = 0; i < values.length; i++) {
      if (number === values[i]) {
        return roman[i];
      } else if (number === '2') {
        return romTwo;
      } else if (number === '3') {
        return romThree;
      } else if (number === '4') {
        return romFour;
      } else if  (number === '6') {
        return romSix;
      } else if (number === '7') {
        return romSeven;
      } else if (number === '8') {
        return romEight;
      } else if (number === '9') {
        return romNine;
      } else if (number === '11') {
        return romEleven;
      } else if (number === '12') {
        return romTwelve;
      } else if (number === '13') {
        return romThirteen;
      } else if (number === '14') {
        return romFourteen;
      } else if (number === '15') {
        return romFifteen;
      } else if (number === '16') {
        return romSixteen;
      } else if (number === '17') {
        return romSeventeen;
      } else if (number === '18') {
        return romEighteen;
      } else if (number === '19') {
        return romNineteen;
      } else if (number === '20') {
        return romTwenty;
      }
  }
}



$(document).ready(function() {
  $("#number-input").submit(function(event) {
    var number = $("input#numbers").val();
    $("#output").text(romanNumeral(number));
    event.preventDefault();
  });
});
