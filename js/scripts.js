var values = ['1000', '500', '100', '50', '10', '5', '1'];
var roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];


var romanNumeral = function(number) {
  for (i = 0; i < values.length; i++) {

  }
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


if (number > values[i]) {
  var remainder =  number - values[i];
}
