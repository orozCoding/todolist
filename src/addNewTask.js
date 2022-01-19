import {
  saveTaskArr, resetCompleted, getTasks, addRemoveListeners, completed
} from './isolated_functions';

const listHTML = (index, icons) => {
  const { Trash, Check } = icons;
  const html = `<input type="checkbox" id="cb-${index}" class="task-cb">
  <input id="input-${index}" type="text" class="task-info">
  <img id="check-${index}" src="${Check}" alt="Check Icon" class="click d-off">
  <img id="remove-${index}" src="${Trash}" alt="Remove Icon" class="click">`;
  return html;
};
const createTask = (index, icons) => {
  const newTask = document.createElement('li');
  newTask.id = `task-${index}`;
  newTask.classList.add('task-container', 'd-flex', 'row');
  newTask.innerHTML = listHTML(index, icons);
  return newTask;
};
const appendTask = (index, icons) => {
  const listUl = document.querySelector('#list');
  const newTask = createTask(index, icons);
  listUl.appendChild(newTask);
};

const addTask = (task, index, icons) => {
  appendTask(index, icons);
  addRemoveListeners(index, icons, addTask);
}
const renderTask = (tasks, icons) => {
  let index = 1;
  tasks.forEach((task) => {
    addTask(task, index, icons);
    index += 1;
  });
  completed();
  resetCompleted();
};
const displayTasks = (input, tasks, icons) => {
  const listDiv = document.getElementById('list');
  listDiv.innerHTML = '';

  renderTask(tasks, icons);
  input.value = null;
  
};
const addNewTask = (taskInput, icons) => {
  if (taskInput.value === '') return
  const tasks = getTasks();
  const newIndex = tasks.length + 1;
  const task = {
    description: taskInput.value,
    completed: false,
    index: newIndex,
  };
  tasks.push(task);
  saveTaskArr(tasks);
  
  resetCompleted();
  displayTasks(taskInput, tasks, icons);

};

const reRender = (tasks, icons, add) => {
  const listDiv = document.getElementById('list');
  listDiv.innerHTML = '';
  
  let index = 1;
  tasks.forEach((task) => {
    add(task, index, icons);
    index += 1;
  });
  completed();
  resetCompleted();
};

const filterTax = (tasks, index) => {
  const removing = tasks.filter((task) => task.index !== index);
  console.log('array after filter ' + removing)
  return removing;
};

const removeTask = (fixIndex, icons, add) => {
  let tasks = getTasks();
  tasks = filterTax(tasks, fixIndex);
  console.log('tasks length',tasks.length,'------------------------------');
  saveTaskArr(tasks);
  const listDiv = document.querySelector('#list');
  console.log('listDiv',listDiv)
  listDiv.innerHTML = '';

  renderTask(tasks,icons)
  
  
};


export { addNewTask, removeTask };