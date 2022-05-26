// blue-modal-button switches modal-seen to modal-hidden //
// modal-hidden goes to modal-seen by clicking red-no-button //

var $blueOpen = document.querySelector('.blue-modal-button');
var $redClose = document.querySelector('.red-no-button');
var $fullModal = document.querySelector('.modal-seen');

function openModal(event) {
  $fullModal.className = 'modal-hidden';
}

function closeModal(event) {
  $fullModal.className = 'modal-seen';
}

$blueOpen.addEventListener('click', openModal);
$redClose.addEventListener('click', closeModal);
