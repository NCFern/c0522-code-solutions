/* exported invert */

// create object that inverts keys and source //

// function with 1 parameter- source //
// create empty object literal //
// for-in loop- get key in source //
// swap values in object literal //
// return object literal //

function invert(source) {
  var invertObject = {};
  for (var key in source) {
    invertObject[source[key]] = key;
  }
  return invertObject;
}
