/* exported getValues */

// function that gives an array of objects property values //
// create new array //
// for in loop that goes through object //
// push object[key] to new array //
// return output //

function getValues(object) {
  var valueArray = [];
  for (var key in object) {
    valueArray.push(object[key]);
  }
  return valueArray;
}
