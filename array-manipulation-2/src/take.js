/* exported take */

// take count of array and return it //

// define function with 2 paramaters- array and count //
// if statement- if array > count, return entire array //
// make empty array to go through //
// for loop- (var i = 0; i < count; i++) //
// push array at index i into new array //
// return new array //

function take(array, count) {
  if (count > array.length) {
    return array;
  }

  var newArray = [];
  for (var i = 0; i < count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
