/* exported countdown */
function countdown(number) { // function being named countdown with the parameter number (some interger)
  var numberArray = []; // create array for output //
  while (number >= 0) { // while number is greater than 0, we run the code block//
    numberArray.push(number); // we push the current number into the number array//
    number--;// replace number with number - 1//
  }
  return numberArray; // return the numbers in the bracket to the countdown//
}
