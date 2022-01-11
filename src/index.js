import _ from 'lodash';
import './style.css';
import Dots from './dots.svg';
import Enter from './enter.svg';
import Load from './load.svg';

const main = document.getElementById('main');
const listContainer= document.createElement('div')
listContainer.id = 'list-container';
listContainer.className = 'd-flex';

const dotsIcon = new Image();
dotsIcon.src = Dots;

const enterIcon = new Image();
enterIcon.src = Enter;

const loadIcon = new Image();
loadIcon.src = Load;

main.innerHTML = ``


const list = [{
  description: 'Finish the project',
  completed: false,
  index: 2,
},
{
  description: 'Buy dinner',
  completed: false,
  index: 1
},
{
  description: 'Walk the dog',
  completed: false,
  index: 3
}]

const listUl = document.getElementById('list');
list.forEach(task => {
  const newTask = document.createElement('li');
  newTask.classList.add('task-container', 'd-flex', 'row');
  newTask.innerHTML = `<input type="checkbox" class="task-cb">
  <p class="task-info">${task.description}</p>
  <p>l</p>`
  listUl.appendChild(newTask);
});