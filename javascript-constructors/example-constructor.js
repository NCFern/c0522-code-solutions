// ExampleConstructor.prototype = function () {
// };

function ExampleConstructor() {
}

console.log('value of ExampleConstructor', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor', typeof ExampleConstructor.prototype);

var newExample = new ExampleConstructor();
console.log('value of newExample', newExample);
console.log('typeof newExample', typeof newExample);

var compareExample = newExample instanceof ExampleConstructor;
console.log('value of compareExample', compareExample);
console.log('typeof compareExample', typeof compareExample);
