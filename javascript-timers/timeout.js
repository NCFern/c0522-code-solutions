// queryselect message in the html //
// put that as part of the function //
// use that function for setTimeout method, with a delay of 2 * 1000 (2 seconds) //

var setMessage = document.querySelector('.message');

function getMessage() {
  setMessage.textContent = 'We are trying to reach you regarding your cars extended warranty...';
}

setTimeout(getMessage, 2 * 1000);
