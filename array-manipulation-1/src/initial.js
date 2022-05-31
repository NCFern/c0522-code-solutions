/* exported initial */

// make new array that contains all elements except last (array.length - 1) //
// make new array //
// make for loop to start at index 0 but use array.length - 1 //
// push the rest through array //
// return array //

function initial(array) {
  var initialArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    initialArray.push(array[i]);
  }
  return initialArray;
}
