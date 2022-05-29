/* exported getKeys */

// function that gives array of object's properties//
// create new array //
// for in loop that goes through object //
// push keys to new array //
// return output //

function getKeys(object) {
  var keyArray = [];
  for (var key in object) {
    keyArray.push(key);
  }
  return keyArray;
}
