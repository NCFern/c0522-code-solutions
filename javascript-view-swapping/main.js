// query all of tab and view elements //
// click event listener for tab container switching tabs //
// if statement to see if event.target.matches('.tab') //
// make loop of of switching from tab active to tab //
// if staement to see if event.target.getAttribute('data-view') //
// make loop of switching from view to view hidden //

var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', switchTabs);

function switchTabs(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        $tab[i].className = 'tab active';
      } else if ($tab[i] !== event.target) {
        $tab[i].className = 'tab';
      }
    }

    var $dataView = event.target.getAttribute('data-view');
    for (var j = 0; j < $view.length; j++) {
      if ($view[j].getAttribute('data-view') === $dataView) {
        $view[j].className = 'view';
      } else if ($view[j].getAttribute('data-view') !== $dataView) {
        $view[j].className = 'view hidden';
      }
    }
  }
}
