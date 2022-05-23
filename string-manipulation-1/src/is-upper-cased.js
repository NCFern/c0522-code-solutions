/* exported isUpperCased */
// write a function that checks if the word is uppercased //
// create a var that checks the character at string 0 if its capitalized//
// if yes, return true //
// if no, return false //
// return output //

function isUpperCased(word) {
  var capital = [];

  if (word !== word.charAt(0).toUpperCase()) {
    return false;
  }
  if (word !== word.charAt(0).toLowerCase()) {
    return true;
  }
  return capital;
}
