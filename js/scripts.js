
var romanArr = [];
var romanArr2 = [];

var values = [1000, 500, 100, 50, 10, 5, 1];
var roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];

var mFour = "MMMM";
var dFour = "DDDD";
var cFour = "CCCC";
var lFour = "LLLL";
var xFour = "XXXX";
var vFour = "VVVV";
var iFour = "IIII";



var romanNumeral = function(number) {
  var numberInt = parseInt(number);
  for (i = 0; i < values.length; i++) {
      while (number >= values[i]) {
        var firstValue = values[i];
        romanArr.push(roman[i]);
        var number = (number - firstValue);
        var romanString = romanArr.join('');
      }
    }
    if (romanString.includes(xFour)){
      console.log("worked");
      for (j = 6; j >= values.length; j--) {
        while (number <= values[j]) {
          var secValue = values[j];
          romanArr2.push(roman[j]);
          var number = (number - secValue);
        }
      }
  }
    return romanArr.join('');
    return romanArr2.join('');
  }




$(document).ready(function() {
  $("#number-input").submit(function(event) {
    var number = $("input#numbers").val();
    $("#output").text(romanNumeral(number));
    event.preventDefault();
  });
});


// number = 6

// if 6 is more than next lowest number in the values array then take that roman numeral and subract it from that roman numeral and take the remainder and turn that into a roman numeral


// if (number > values[i]) {
//   var remainder =  number - values[i];
// }
