/* exported swapChars */

// swap chars of 2 indexed characters in a string //
// make 2 variables to represent the letters at first and second index //
// make a variable to hold final string //
// for loop to interate through each letter of the string //
// if statement- if i = first index, put it in the second index place and vice versa //
// if not, keep adding the letters in //

function swapChars(firstIndex, secondIndex, string) {
  var firstLetter = string[firstIndex];
  var secondLetter = string[secondIndex];
  var finalString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      finalString += secondLetter;
    } else if (i === secondIndex) {
      finalString += firstLetter;
    } else {
      finalString += string[i];
    }
  }
  return finalString;
}
