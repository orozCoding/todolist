const Trash = './trash.svg';
const Enter = './enter.svg';
const Load = './load.svg';
const Check = './check.svg';
import { main, listContainer, checkIndex, tasks, saveTaskArr, addNewTask, tasksChecker, renderTask, clearCompleted } from './functions.js'; // eslint-disable-line

listContainer.innerHTML = `<div id="list-title" class="d-flex row"><h3>Today's To Do</h3><img src="${Load}" alt="Load Icon" class="click"></div>
<div id="list-input" class="d-flex row"><input type="text" id="input-field" placeholder="Add to your list..."><img id="btn-enter" src="${Enter}" alt="Enter Icon" class="click"></div>
<ul id="list" class="d-flex"></ul>
<div id="list-bottom">
    <p id="list-clear" class="click">Clear all completed</p>
</div>`;

if (!localStorage.getItem('taskArr')) {
  localStorage.setItem('taskArr', JSON.stringify(tasks));
}

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
  if (e.key === 'Enter') {
    if (taskInput.value !== '') {
      addNewTask(taskInput, Trash, Check);
    }
  }
});

enterBtn.addEventListener('click', () => {
  if (taskInput.value !== '') {
    addNewTask(taskInput, Trash, Check);
  }
});

const listInput = document.getElementById('list-input');

taskInput.addEventListener('focus', () => {
  listInput.classList.add('focus');
});

taskInput.addEventListener('blur', () => {
  listInput.classList.remove('focus');
});

const listClear = document.getElementById('list-clear');
listClear.addEventListener('click', () => {
  clearCompleted(Trash, Check);
});
