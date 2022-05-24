// everytime there is a click, p class gets updated +1 click //
// .hot-button (___) changes due to how many times its clicked //
// click > 4 is cold //
// click > 7 is cool //
// click > 10 is tepid //
// click > 13 is warm //
// click > 16 is hot //
// more clicks is nuclear //

// button class changes every time clicks threshold is surpassed //
// .click-count

var button = document.querySelector('.hot-button');
var clicks = document.querySelector('.click-count');
var userClicks = 0;

function getClicks(event) { // logs counter variable into console //
  userClicks++;
  clicks.textContent = 'Clicks: ' + userClicks;

  if (userClicks < 4) {
    button.className = 'hot-button cold';
  } else if (userClicks < 7) {
    button.className = 'hot-button cool';
  } else if (userClicks < 10) {
    button.className = 'hot-button tepid';
  } else if (userClicks < 13) {
    button.className = 'hot-button warm';
  } else if (userClicks < 16) {
    button.className = 'hot-button hot';
  } else if (userClicks > 16) {
    button.className = 'hot-button nuclear';
  }
}

button.addEventListener('click', getClicks);
