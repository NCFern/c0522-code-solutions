// countdown from 5 then show final message //
// query select countdown display in html //
// count is incremented downwards i-- //
// if statement: if count > 0, show count //
// else, show final message //
// use clearInterval to clear the countdown ~ //
// use that function for setInterval method, with a delay of 1000 (1 second) //

var count = 5;
var countdownId = null;
var finalMessage = document.querySelector('.countdown-display');

function countDown() {
  count--;
  if (count > 0) {
    finalMessage.textContent = count;
  } else {
    finalMessage.textContent = 'Kids Next Door... Battle Stations!';
    clearInterval(countdownId);
  }
}

countdownId = setInterval(countDown, 1000);
