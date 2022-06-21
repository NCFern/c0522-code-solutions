/* exported dropRight */

// array that contains count starting from the end minus count //

// define function with 2 parameters- array and count //
// make empty array //
// for loop- (var i = 0; i < array.length - count; i++) //
// push array at index i into new array //
// return new array //

function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
