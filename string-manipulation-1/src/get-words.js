/* exported getWords */

// create function that seperates a string into multiple words if space is detected between them //
// if string contains nothing, place in new array //
// use split method to split the string into two new words with the space as seperator //

function getWords(string) {
  if (string === '') {
    return [];
  }
  return string.split(' ');
}
