// create 3 functions (handleFocus, handleBlur, handleInput) //
// query the DOM's 3 form controls (name, email message) //
// create 3 event listeners (focus, blur, input) for each of the form control elements //

function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

var formName = document.querySelector('#user-name');
var formEmail = document.querySelector('#user-email');
var formMessage = document.querySelector('#user-message');

formName.addEventListener('focus', handleFocus);
formEmail.addEventListener('focus', handleFocus);
formMessage.addEventListener('focus', handleFocus);

formName.addEventListener('blur', handleBlur);
formEmail.addEventListener('blur', handleBlur);
formMessage.addEventListener('blur', handleBlur);

formName.addEventListener('input', handleInput);
formEmail.addEventListener('input', handleInput);
formMessage.addEventListener('input', handleInput);
