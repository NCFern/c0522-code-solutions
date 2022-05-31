/* exported compact */

// function that removes falsy values (false, null, NAN, 0/-0, undefined, empty strings) //
// create new array //
// for loop to go through array //
// if array contains falsy values (!array), continue past it //
// push rest of the array to new array //
// return array //

function compact(array) {
  var compactArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!array[i]) {
      continue;
    }
    compactArray.push(array[i]);
  }
  return compactArray;
}
