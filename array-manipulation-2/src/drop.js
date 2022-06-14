/* exported drop */

// take count of array and return it past count number //

// define function with 2 parameters- array and count //
// if statement- if array > count, return entire array //
// make empty array to go through //
// for loop- (var i = count; i < array.length; i++) //
// push array at index i into new array //
// return new array //

function drop(array, count) {
  if (count > array.length) {
    return array;
  }

  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
