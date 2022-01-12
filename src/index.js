import './style.css';
import Trash from './trash.svg';
import Enter from './enter.svg';
import Load from './load.svg';
import Check from './check.svg';
import { main, listContainer, checkIndex, tasks, saveTaskArr, addNewTask, tasksChecker, renderTask } from './functions.js';

listContainer.innerHTML = `<div id="list-title" class="d-flex row"><h3>Today's To Do</h3><img src="${Load}" alt="Load Icon" class="click"></div>
<div id="list-input" class="d-flex row"><input type="text" id="input-field" placeholder="Add to your list..."><img id="btn-enter" src="${Enter}" alt="Enter Icon" class="click"></div>
<ul id="list" class="d-flex"></ul>
<div id="list-bottom">
    <p id="list-clear" class="click">Clear all completed</p>
</div>`;
main.appendChild(listContainer);

window.addEventListener('load', () => {
  tasksChecker();
  renderTask(tasks, Trash, Check);
  saveTaskArr(tasks);
  checkIndex();
});

const taskInput = document.getElementById('input-field');
const enterBtn = document.getElementById('btn-enter');

taskInput.addEventListener('keydown', (e) => {
  if(e.key === 'Enter'){
    if(taskInput.value === ''){
      return;
    } else {
    addNewTask(taskInput, Trash, Check);
    }
  }
});

enterBtn.addEventListener('click', () => {
  if(taskInput.value === ''){
    return;
  } else {
  addNewTask(taskInput, Trash)
}
});

const listInput = document.getElementById('list-input');

taskInput.addEventListener('focus', () => {
  listInput.classList.add('focus');
});

taskInput.addEventListener('blur', () => {
  listInput.classList.remove('focus');
});