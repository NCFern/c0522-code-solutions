/* exported sumAll */
function sumAll(numbers) { // function being named sumAll with parameter numbers (ex-1,2,4)
  var outputNumber = 0; // initially start with 0 //
  for (var i = 0; i < numbers.length; i++) {
    // when i is less than the length property of the numbers object //
    outputNumber = numbers[i] + outputNumber;
  } // numbers[0] + numbers[1] + numbers[2] + ...//
  return outputNumber;
}
// [ex-1,3,7]
// while we have numbers in our array,we continue to add it to our current number//
// push the final output//
