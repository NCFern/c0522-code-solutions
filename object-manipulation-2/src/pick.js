/* exported pick */

// make an object containing the properties of source from keys //

// define function with 2 parameters- source and keys /
// make empty object literal //
// for loop- (var i = 0; i < keys.length; i++) //
// if statement- check if source at keys is undefined //
// if it isnt, assign keys[i] to object literal and source //
// return object literal //

function pick(source, keys) {
  var finalPick = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      finalPick[keys[i]] = source[keys[i]];
    }
  }
  return finalPick;
}
