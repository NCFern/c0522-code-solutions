/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if ((number % 2) === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age >= 18) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 18 && person.age >= 21) {
    return false;
  } else {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acidic';
  } else if (pH > 7 && pH <= 14) {
    return 'basic';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if ((name === 'wakko') || (name === 'yakko')) {
    return 'Come join the Warner Brothers!';
  } else if (name === 'dot') {
    return 'And the Warner Sister, Dot!';
  } else {
    return 'Goodnight Everybody~';
  }
}
