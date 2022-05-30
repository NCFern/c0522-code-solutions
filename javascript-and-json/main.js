// want property name id and pass it as string //

var trashTaste = [
  {
    isbn: '978-1634428125',
    title: 'March Comes In Like A Lion',
    author: 'Chica Umino'
  },
  {
    isbn: '978-0316270373',
    title: 'Baccano!',
    author: 'Katsumi Enami & Ryōgo Narita'
  },
  {
    isbn: '978-1932234961',
    title: '5 Centimeters Per Second',
    author: 'Makoto Shinkai'
  }
];

console.log('trashTaste', trashTaste);
console.log('typeof trashTaste', typeof trashTaste);

var booksJSON = JSON.stringify(trashTaste);

console.log('booksJSON', booksJSON);
console.log('typeof booksJSON', typeof booksJSON);

var studentJSON = '{"id": 69, "name": "Borat Sagadiev"}';

console.log('studentJSON', studentJSON);
console.log('typeof studentJSON', typeof studentJSON);

var student = JSON.parse(studentJSON);

console.log('student', student);
console.log('typeof student', typeof student);
