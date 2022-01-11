import _ from 'lodash';
import './style.css';

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