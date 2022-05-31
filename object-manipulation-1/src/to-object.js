/* exported toObject */

// function that gets pairs its key ([0]) and value ([1]) //
// make object literal //
// assign index 0 as key and index 1 as value to object //
// return object //

function toObject(keyValuePair) {
  var finalObject = {};
  finalObject[keyValuePair[0]] = keyValuePair[1];
  return finalObject;
}
