var values = ['1', '5', '10', '50', '100', '500', '1000'];
var roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];


var romanNumeral = function(number) {
  // this for loop will equal even values and their roman counterpart
  for (i = 0; i < values.length; i++) {
      if (number === values[i]) {
        return roman[i];
      } else if (number === '2') {
        return "II";
      } else if (number === '3') {
        return "III";
      } else if (number === '4') {
        return "IV";
      } else if  (number === '6') {
        return "VI";
      } else if (number === '7') {
        return "VII";
      } else if (number === '8') {
        return "VIII";
      } else if (number === '9') {
        return "IX";
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
