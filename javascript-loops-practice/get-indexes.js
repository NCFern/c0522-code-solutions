/* exported getIndexes */
function getIndexes(array) {
  var finalIndex = 0;
  for (var i = 0; i < array.length; i++) {
    finalIndex = array[i] + finalIndex;
  }
  return finalIndex;
}
