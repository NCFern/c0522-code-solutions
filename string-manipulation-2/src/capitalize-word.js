/* exported capitalizeWord */

// define function that capitalizes the word //
// lower case the word //
// check if it is 'javascript' //
// if so, return 'JavaScript' //
// if not, capitalize first letter of word at index 0//
// slice from index 1 and lowercase the rest of the word //
// return output//

function capitalizeWord(word) {
  var capitalWord = word.toLowerCase();
  if (capitalWord === 'javascript') {
    return 'JavaScript';
  }
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
