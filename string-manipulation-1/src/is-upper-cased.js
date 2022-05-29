/* exported isUpperCased */
// write a function that checks if the word is uppercased //
// loop through each letter in array to see if it lowercased //
// if lower case found, return false //
// otherwise, return true //

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
