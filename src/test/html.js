const html = `<main id="main" class="d-flex">
<h1>To Do List!</h1>
<div id="list-container" class="d-flex"><div id="list-title" class="d-flex row"><h3>Today's To Do</h3><img src="./load.svg" alt="Load Icon" class="click"></div>
<div id="list-input" class="d-flex row"><input type="text" id="input-field" placeholder="Add to your list..." class=""><img id="btn-enter" src="./enter.svg" alt="Enter Icon" class="click"></div>
<ul id="list" class="d-flex"><li id="task-1" class="task-container d-flex row"><input type="checkbox" id="cb-1" class="task-cb">
<input id="input-1" type="text" class="task-info">
<img id="check-1" src="./check.svg" alt="Check Icon" class="click d-off">
<img id="remove-1" src="./trash.svg" alt="Remove Icon" class="click"></li><li id="task-2" class="task-container d-flex row"><input type="checkbox" id="cb-2" class="task-cb">
<input id="input-2" type="text" class="task-info">
<img id="check-2" src="./check.svg" alt="Check Icon" class="click d-off">
<img id="remove-2" src="./trash.svg" alt="Remove Icon" class="click"></li><li id="task-3" class="task-container d-flex row"><input type="checkbox" id="cb-3" class="task-cb">
<input id="input-3" type="text" class="task-info">
<img id="check-3" src="./check.svg" alt="Check Icon" class="click d-off">
<img id="remove-3" src="./trash.svg" alt="Remove Icon" class="click"></li></ul>
<div id="list-bottom">
<p id="list-clear" class="click">Clear all completed</p>
</div></div></main>`;

const icons = {
  Load: 'load',
  Check: 'load',
  Trash: 'load',
  Enter: 'load',
};

const tasks = [
  { description: 'First task', completed: false, index: 1 },
  { description: 'Second task', completed: false, index: 2 },
  { description: 'Third task', completed: false, index: 3 }];

const html2 = `<main id="main" class="d-flex">
<h1>To Do List!</h1>
<div id="list-container" class="d-flex"><div id="list-title" class="d-flex row"><h3>Today's To Do</h3><img src="./load.svg" alt="Load Icon" class="click"></div>
<div id="list-input" class="d-flex row"><input type="text" id="input-field" placeholder="Add to your list..." class=""><img id="btn-enter" src="./enter.svg" alt="Enter Icon" class="click"></div>
<ul id="list" class="d-flex"><li id="task-1" class="task-container d-flex row"><input type="checkbox" id="cb-1" class="task-cb">
<input id="input-1" type="text" class="task-info">
<img id="check-1" src="./check.svg" alt="Check Icon" class="click d-off">
<img id="remove-1" src="./trash.svg" alt="Remove Icon" class="click"></li><li id="task-2" class="task-container d-flex row"><input type="checkbox" id="cb-2" class="task-cb">
<input id="input-2" type="text" class="task-info">
<img id="check-2" src="./check.svg" alt="Check Icon" class="click d-off">
<img id="remove-2" src="./trash.svg" alt="Remove Icon" class="click"></li><li id="task-3" class="task-container d-flex row"><input type="checkbox" id="cb-3" class="task-cb">
<input id="input-3" type="text" class="task-info">
<img id="check-3" src="./check.svg" alt="Check Icon" class="click d-off">
<img id="remove-3" src="./trash.svg" alt="Remove Icon" class="click"></li></ul>
<div id="list-bottom">
<p id="list-clear" class="click">Clear all completed</p>
</div></div></main>`;

const tasks2 = [
  { description: 'Second task', completed: false, index: 1 },
  { description: 'Third task', completed: false, index: 2 },
  { description: 'Forth task', completed: false, index: 3 },
];

export { html, html2, icons, tasks, tasks2 }