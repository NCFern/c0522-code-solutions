/* exported takeRight */

// array that contains count starting from the end //

// define function with 2 parameters- array and count //
// make empty array //
// for loop- (var i = 0; i < array.length; i++) //
// if statement- (i > array.length - count - 1) //
// push array at index i into new array //
// return new array //

function takeRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (i > array.length - count - 1) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
