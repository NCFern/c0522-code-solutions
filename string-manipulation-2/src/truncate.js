/* exported truncate */
// define function that cut string down to a specified length followed by elipsis //
// get from 0 to character length of the string //
// slice the remaining part while concatinating with string '...' //

function truncate(length, string) {
  var cutWord = string.slice(0, length) + '...';
  return cutWord;
}
