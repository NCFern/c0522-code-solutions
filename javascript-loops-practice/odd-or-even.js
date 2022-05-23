/* exported oddOrEven */

// create empty array for numbers //
// create for loop that goes until you reach end of array //
// if number is divisible by 2, then mark as even //
// if not divisible by 2, mark as odd //
// push marked number into array //

function oddOrEven(number) {
  var finalArray = [];
  for (var i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      finalArray.push('even');
    } else {
      finalArray.push('odd');
    }
  }
  return finalArray;
}
