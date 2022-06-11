var $userList = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);

  var users = xhr.response;
  for (var i = 0; i < xhr.length; i++) {
    var user = users[i];
    var $li = document.createElement('li');
    $li.textContent = user;
    $userList.appendChild($li);
  }
});

xhr.send();

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.responseType = 'json';
// xhr.addEventListener('load', function () {
//   console.log(xhr.status);
//   console.log(xhr.response);

//   for (var i = 0; i < xhr.length; i++) {
//     $userList.push(xhr.name[i]);
//   }

//   var $userName = document.createElement('li');
//   $userName.textContent = xhr.name;

//   $userList.appendChild($userName);
//   xhr.send();
// });
