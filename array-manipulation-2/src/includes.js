/* exported includes */

//  look at value in array and match with value- return boolean //

// define function with 2 parameters- array and value //
// for loop- (var i = 0; i < array.length; i++) //
// if value at index === value, return true //
// otherwise, return false //

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
