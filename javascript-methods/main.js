var x = 11;
var y = 22;
var z = 33;

var maxValue = Math.max(x, y, z);
console.log('maxValue', maxValue);

var heroes = ['Saber', 'Rider', 'Lancer', 'Archer'];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero', randomHero);

var library = [
  {
    title: 'Your Lie In April',
    author: 'Naoshi Arakawa'
  },
  {
    title: 'Bakemongatari',
    author: 'Niso Isin'
  }
];

var lastBook = library.pop();
console.log('lastBook', lastBook);

var firstBook = library.shift();
console.log('firstBook', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 0);
console.log('library', library);

var fullName = 'Haruhi Suzumiya';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName', sayMyName);
