var values = ['1', '5', '10', '50', '100', '500', '1000'];
var roman = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

var romanNumeral = function(number) {
  
}


$(document).ready(function() {
  $("#number-input").submit(function(event) {
    var number = $("input#numbers").val();
    $("#output").text(romanNumeral(number));
    event.preventDefault();
  });
});
