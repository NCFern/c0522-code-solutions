function convertMinutesToSeconds(minutes) {
  var product = (minutes * 60);
  return product;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult', convertMinutesToSecondsResult);

function greet(name) {
  var hello = ('I aM tHe GrEaT ' + name);
  return hello;
}

var fullGreeting = greet('Cornholio');
console.log('fullGreeting', fullGreeting);

function getArea(width, height) {
  var area = (width * height);
  return area;
}

var areaResult = getArea(6, 9);
console.log('areaResult', areaResult);

function getFirstName(person) {
  var firstName = (person.firstName);
  return firstName;
}

var firstNameResult = getFirstName({ firstName: 'Diarmuid', lastName: 'Ua Duibhne' });
console.log('firstNameResult', firstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var getLastElementResult = getLastElement(['power', 'wisdom', 'courage']);
console.log('getLastELementResult', getLastElementResult);
