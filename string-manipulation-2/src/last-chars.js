/* exported lastChars */
// get the last number of letters of a string //
// if statement- if our length is greater than the string, return it //
// if not, slice it similar to truncate or firstChars //

function lastChars(length, string) {

  if (length > string.length) {
    return string;
  } else {
    return string.slice(string.length - length);
  }
}
