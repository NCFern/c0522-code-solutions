/* exported capitalizeWords */

// capitalize every word in the string //
// make new variable of empty string //
// upper case first letter of string //
// make for loop that starts at index 1 for string and lower case the rest of word //
// if statement to detect if there is a space//
// if so, capitalize the string[i + 1] //

function capitalizeWords(string) {
  var capitalString = '';
  capitalString = string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    capitalString += string[i].toLowerCase();

    if (string[i] === ' ') {
      capitalString += string[i + 1].toUpperCase();
      i++;
    }
  }
  return capitalString;
}
