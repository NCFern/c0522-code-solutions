/* exported tail */

// make new array that removes the first [0] element, but has the rest //
// make new array //
// make for loop to start at index 1 //
// push the rest through array //
// return array //

function tail(array) {
  var tailArray = [];
  for (var i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
}
