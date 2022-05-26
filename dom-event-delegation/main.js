// make click event listener for the task list //
// make function for event listener that logs event.target and event.target.tagName //
// make if statement: if button of task is clicked, remove it from list //

var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', taskManager);

function taskManager(event) {
  console.log('event.target', event.target);
  console.log('event.target.tagName', event.target.tagName);
}

// if (event.target.tagName === 'BUTTON') {
// }

// var $task-list-item = event.target.closest('.task-list-item');
// console.log (.task-list-item);
// $task-list-item.remove();
