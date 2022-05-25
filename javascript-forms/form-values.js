
// create a function that submits and stores contact form info (name, email, message) //
// query the DOM for the contact form //
// make add event listener for 'submit' event //

function handleContact(event) {
  event.preventDefault();
  //  document.elements.name.value; //
  // var name = contactForm.elements.name.value;
  // var email = contactForm.elements.email.value;
  // var message = contactForm.elements.message.value;
  // var formFull = {
  //   name: name,
  //   email: email,
  //   message: message,
  // };

  // console.log('formFull', formFull);
  handleContact.reset();
}

var contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', handleContact);
