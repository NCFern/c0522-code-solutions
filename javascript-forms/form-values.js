
// create a function that submits and stores contact form info (name, email, message) //
// query the DOM for the contact form //
// make add event listener for 'submit' event //

var contactForm = document.querySelector('#contact-form');

function handleContact(event) {
  event.preventDefault();
  var formFull = {
    name: contactForm.elements.name.value,
    email: contactForm.elements.email.value,
    message: contactForm.elements.message.value
  };

  console.log('formFull', formFull);
  contactForm.reset();
}

contactForm.addEventListener('submit', handleContact);
