/* exported capitalize */
// write a function that capitalizes the word //
// have the first letter of the word capitalized //
// lower case the rest of the word //
// return output//

function capitalize(word) {
  var cap = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return cap;
}
