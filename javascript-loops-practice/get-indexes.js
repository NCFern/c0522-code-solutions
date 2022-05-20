/* exported getIndexes */
function getIndexes(array) {
  var finalIndex = [];
  for (var i = 0; i < array.length; i++) {
    // while i is less than the array length, we run the code block//
    // then add 1 each iteration //
    finalIndex.push(i); // push the array number onto our final index//
  }
  return finalIndex;
}
