/* exported findIndex */
// create empty array for index //
// create for loop that keeps going until end of array //
// if value is found in array, push value to finalIndex //
// if value is not found, return as -1 //
// return finalIndex //

function findIndex(array, value) {
  var finalIndex = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  if (array[i] !== value) {
    return -1;
  }
  return finalIndex;
}
