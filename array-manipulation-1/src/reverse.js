/* exported reverse */

// function that reverses order of elements in array //
// make new array //
// for loop that iterates array backwards (i--) //
// push reconstruced array into new array //
// return new array //

function reverse(array) {
  var backArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    backArray.push(array[i]);
  }
  return backArray;
}
