/* exported filterOutStrings */
// set up empty array //
// for each value, see if values contains strings //
// if yes, leave value out of output, then loop back to start //
// if no, push number to output, then loop back to start //
// return output to array //

function filterOutStrings(values) {
  var finalStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof (values[i]) === 'string') {
      continue;
    } else {
      finalStrings.push(values[i]);
    }
  }
  return finalStrings;
}
