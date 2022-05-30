/* exported reverseWord */
// create function that takes a word and reverses it order //
// make for loop that iterates the word backwards (i--) //
// reconstruct new string //
// return result //

function reverseWord(word) {
  var backWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    backWord += word[i];
  }
  return backWord;
}
