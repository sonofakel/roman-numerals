var values = ['1', '5', '10', '50', '100', '500', '1000'];
var roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];


var romanNumeral = function(number) {
  for (i = 0; i < values.length; i++) {
    for (j = 0; j < roman.length; i++) {
      if (number === values[i]) {
        return roman[i];
      }
      // } else if (number[1] === values[i]) {
      //   return roman[1];
      // }
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
