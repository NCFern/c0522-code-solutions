var colors = ['red', 'white', 'blue'];

console.log('value of colors[0]', colors[0]);
console.log('value of colors[1]', colors[1]);
console.log('value of colors[2]', colors[2]);

var America = colors[0] + ', ' + colors[1] + ', ' + 'and' + ' ' + colors[2];
console.log('America is', America);

colors[2] = 'green';

var Mexico = colors[0] + ', ' + colors[1] + ', ' + 'and' + ' ' + colors[2];
console.log('Mexico is', Mexico);

console.log('colors', colors);

var students = ['Leonardo', 'Donatello', 'Raphael', 'Michaelangelo'];

var numberOfStudents = students.length;

console.log('There are ' + numberOfStudents + ' students in the class');

var lastIndex = numberOfStudents - 1;

var lastStudent = students[lastIndex];
console.log('The last student in the array is', lastStudent);

console.log('students', students);
