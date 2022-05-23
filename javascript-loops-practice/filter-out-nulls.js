/* exported filterOutNulls */
// set up empty array //
// for each value, see if  i = null //
// if no, push number to output, then loop back to start //
// if yes, leave value out of output, then loop back to start //
// return output to array //

function filterOutNulls(values) {
  var finalValues = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      finalValues.push(values[i]);
    }
  }
  return finalValues;
}
