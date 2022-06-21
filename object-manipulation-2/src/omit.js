/* exported omit */

// make object that doesnt reatures source in keys //

// function with 2 parameters- source and keys //
// make empty object literal //
// assign to object the object literal snf souce object //
// for loop- (var i = 0; i < keys.length; i++) //
// if statement- if keys values is not equal to properties of new object, delete those values //
// return object literal //

function omit(source, keys) {
  var finalOmit = {};
  Object.assign(finalOmit, source);
  for (var i = 0; i < keys.length; i++) {
    if (finalOmit[keys[i]] !== undefined) {
      delete finalOmit[keys[i]];
    }
  }
  return finalOmit;
}
