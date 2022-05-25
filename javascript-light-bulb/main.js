// button class="bulb-on" //
// main class="background-on" //

// use doc.querySelector to get bulb-on in html and assign to var button //
// have var userclicks store # of clicks //
// create a function lightSwitch that changes on/off //
// if userclicks is divisible by 2, bulb is on and background is on//
// if userclicks is not divisible by 2, bulb is off and background is off//
// every time button is clicked, start the function //

var button = document.querySelector('.bulb-on');
var ground = document.querySelector('.background-on');
var userClicked = true;

function lightSwitch(event) {
  userClicked = !userClicked;
  if (userClicked) {
    button.className = 'bulb-on';
    ground.className = 'background-on';
  } else {
    button.className = 'bulb-off';
    ground.className = 'background-off';
  }
}

button.addEventListener('click', lightSwitch);
