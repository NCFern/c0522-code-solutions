/* exported numVowels */

// count the number of vowels in string //
// make var to hold number of vowels //
// make array to hold capital and lower case vowels //
// make for loop that goes through letters of string //
// if statement- if there is a vowel in the string, increment the vowel number //
// return vowel number //

function numVowels(string) {
  var vowelNumber = 0;
  var vowelArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < string.length; i++) {
    if (vowelArray.includes(string[i])) {
      vowelNumber++;
    }
  }
  return vowelNumber;
}
