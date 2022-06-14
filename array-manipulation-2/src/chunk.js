/* exported chunk */

// make array within array, each containing count //

// define function with 2 parameters- array and size //
// make new array //
// for loop- (var i = 0; i < array.length; i += size) //
// push array using slice method, slice array into increments based on var i into new array //
// return new array //

function chunk(array, size) {
  var newArray = [];
  for (var i = 0; i < array.length; i += size) {
    newArray.push(array.slice(i, i + size));
  }
  return newArray;
}
