import './style.css';
import Trash from './trash.svg';
import Enter from './enter.svg';
import Load from './load.svg';
import { main, listContainer, checkIndex, tasks, index, saveTaskArr, addTask, tasksChecker, renderTask } from './functions.js';

listContainer.innerHTML = `<div id="list-title" class="d-flex row"><h3>Today's To Do</h3><img src="${Load}" alt="Load Icon" class="click"></div>
<div id="list-input" class="d-flex row"><input type="text" id="input-field" placeholder="Add to your list..."><img src="${Enter}" alt="Enter Icon" class="click"></div>
<ul id="list" class="d-flex"></ul>
<div id="list-bottom">
    <p id="list-clear" class="click">Clear all completed</p>
</div>`;
main.appendChild(listContainer);

window.addEventListener('load', () => {
  tasksChecker();
  renderTask(tasks, Trash);
  saveTaskArr(tasks);
  checkIndex();
});

const listInput = document.getElementById('input-field');
listInput.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    let newIndex = localStorage.getItem('index');
    let task = {
      description: listInput.value,
      completed: false,
      index: newIndex,
    }
    tasks.push(task);
    saveTaskArr(tasks);
    checkIndex();
    addTask(task, newIndex, Trash)
    checkIndex();
  }
});