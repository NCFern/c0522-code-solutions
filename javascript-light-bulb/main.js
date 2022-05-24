// button class is bulb //
// p class is click switch //

var button = document.querySelector('.bulb-on');
// var clicks = document.querySelector('.click-switch');
var userClicks = 0;

function lightSwitch(event) {
  userClicks++;
  if (userClicks === 0) {
    button.className = '.bulb-on';
  } else if (userClicks === 1) {
    button.className = '.bulb-off';
  }
}
button.addEventListener('click', lightSwitch);
