/* exported isLowerCased */
// write a function that checks if the word is uppercased //
// loop through each letter in array to see if it not lowercased //
// if lower case not found, return false //
// otherwise, return true //

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
