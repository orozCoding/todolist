import _ from 'lodash';
import './style.css';
import Dots from './dots.svg';
import Enter from './enter.svg';
import Load from './load.svg';

const main = document.getElementById('main');
const listContainer= document.createElement('div')
listContainer.id = 'list-container';
listContainer.className = 'd-flex';
listContainer.innerHTML = `<div id="list-title" class="d-flex row"><h3>Today's To Do</h3><img src="${Load}" alt="Load Icon"></div>
<div id="list-input" class="d-flex row"><input type="text" id="input-field" placeholder="Add to your list..."><img src="${Enter}" alt="Enter Icon"></div>
<ul id="list" class="d-flex"></ul>
<div id="list-bottom">
    <p id="list-clear">Clear all completed</p>
</div>`
main.appendChild(listContainer);

const list = [{
  description: 'Finish the project',
  completed: false,
  index: 3
},
{
  description: 'Buy dinner',
  completed: false,
  index: 1
},
{
  description: 'Walk the dog',
  completed: false,
  index: 2
},
{
  description: 'Help mom with the TV',
  completed: false,
  index: 4
}]

window.addEventListener('load', () => {
  const listUl = document.getElementById('list');
  list.sort((a, b) => a.index - b.index);
  list.forEach(task => {
    const newTask = document.createElement('li');
    newTask.classList.add('task-container', 'd-flex', 'row');
    newTask.innerHTML = `<input type="checkbox" class="task-cb">
    <p class="task-info">${task.description}</p>
    <img src="${Dots}" alt="Load Icon">`
    listUl.appendChild(newTask);
  });
});
