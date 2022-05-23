function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var button = document.querySelector('.click-button');
button.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var mouse = document.querySelector('.hover-button');
mouse.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var clickTwice = document.querySelector('.double-click-button');
clickTwice.addEventListener('dblclick', handleDoubleClick);
