/* exported ransomCase */

// define function that returns string with every other letter capitalized //
// use a for loop to go through string //
// capitalize odd letters of the string //
// capitalize even letters of the string //
// return output //

function ransomCase(string) {
  var mixedWord = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      mixedWord += string[i].toLowerCase();
    } else {
      mixedWord += string[i].toUpperCase();
    }
  }
  return mixedWord;
}
