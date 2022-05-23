/* exported includesSeven */

// create empty array for numbers //
// create for loop that goes until you reach end of array //
// if number in array contains 7, then mark as true //
// if not, mark as false //
// push marked boolean into array //

function includesSeven(array) {
  var sevenIndex = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  if (array[i] !== 7) {
    return false;
  }
  return sevenIndex;
}
