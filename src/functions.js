import { completed } from './completed';
import Load from './load.svg';
import Trash from './trash.svg';
import Enter from './enter.svg';
import Check from './check.svg';

export let tasks = []; // eslint-disable-line

export const icons = {
  Load, Trash, Enter, Check,
};
let index = 1;

const createMainSection = () => {
  const main = document.getElementById('main');
  const listContainer = document.createElement('div');

  listContainer.id = 'list-container';
  listContainer.className = 'd-flex';

  listContainer.innerHTML = `<div id="list-title" class="d-flex row"><h3>Today's To Do</h3><img src="${Load}" alt="Load Icon" class="click"></div>
<div id="list-input" class="d-flex row"><input type="text" id="input-field" placeholder="Add to your list..."><img id="btn-enter" src="${Enter}" alt="Enter Icon" class="click"></div>
<ul id="list" class="d-flex"></ul>
<div id="list-bottom">
    <p id="list-clear" class="click">Clear all completed</p>
</div>`;
  main.appendChild(listContainer);
};

const updateIndex = (tasks) => {
  index = 1;
  tasks.forEach((task) => {
    task.index = index;
    index += 1;
  });
};

const getTasks = () => JSON.parse(localStorage.getItem('taskArr'));

const saveTaskArr = (tasks) => {
  localStorage.setItem('taskArr', JSON.stringify(tasks));
  updateIndex(tasks);
  localStorage.setItem('taskArr', JSON.stringify(tasks));
};

const checkIndex = () => {
  if (localStorage.getItem('taskArr')) {
    const newArr = JSON.parse(localStorage.getItem('taskArr'));
    index = newArr.length + 1;
    localStorage.setItem('index', index);
  } else {
    localStorage.setItem('index', '1');
  }
};

const tasksChecker = () => {
  if (localStorage.getItem('taskArr')) {
    tasks = JSON.parse(localStorage.getItem('taskArr'));
  } else {
    tasks = [];
    localStorage.setItem('taskArr', JSON.stringify(tasks));
  }
};

const removeTask = (tasks, index) => {
  const removing = tasks.filter((task) => task.index !== index);
  const currentIndex = localStorage.getItem('index', index);
  const newIndex = currentIndex - 1;
  localStorage.setItem('index', newIndex);
  return removing;
};

const editTask = (index, inputField) => {
  const tasks = getTasks();
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].index === index) {
      tasks[i].description = inputField.value;
      saveTaskArr(tasks);
    }
  }
};

const resetCompleted = () => {
  const tasks = getTasks();
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].completed === true) {
      const container = document.getElementById(`task-${i + 1}`);
      const input = document.getElementById(`input-${i + 1}`);
      const box = document.getElementById(`cb-${i + 1}`);
      container.classList.add('completed');
      input.style.backgroundColor = 'lightgray';
      input.setAttribute('disabled', 'disabled');
      box.setAttribute('checked', 'checked');
    }
  }
};

const addTask = (task, index, icons) => {
  const { Trash, Check } = icons;
  const listUl = document.getElementById('list');
  const newTask = document.createElement('li');
  newTask.id = `task-${index}`;
  newTask.classList.add('task-container', 'd-flex', 'row');
  newTask.innerHTML = `<input type="checkbox" id="cb-${index}" class="task-cb">
    <input id="input-${index}" type="text" class="task-info">
    <img id="check-${index}" src="${Check}" alt="Check Icon" class="click d-off">
    <img id="remove-${index}" src="${Trash}" alt="Remove Icon" class="click">`;
  listUl.appendChild(newTask);
  const input = document.getElementById(`input-${index}`);
  input.value = task.description;
  const remove = document.getElementById(`remove-${index}`);
  const fixIndex = index;
  remove.addEventListener('click', () => {
    let tasks = JSON.parse(localStorage.getItem('taskArr'));
    tasks = removeTask(tasks, fixIndex);
    saveTaskArr(tasks);
    const listDiv = document.getElementById('list');
    listDiv.innerHTML = '';
    tasks.sort((a, b) => a.index - b.index);
    index = 1;
    tasks.forEach((task) => {
      addTask(task, index, icons);
      index += 1;
    });
    completed();
    resetCompleted();
  });
  const inputField = document.getElementById(`input-${index}`);
  const taskContainer = document.getElementById(`task-${index}`);
  const checkImg = document.getElementById(`check-${index}`);
  const box = document.getElementById(`cb-${index}`);
  inputField.addEventListener('focus', () => {
    taskContainer.classList.add('focus-task');
    checkImg.classList.remove('d-off');
    box.setAttribute('disabled', 'disabled');
  });
  inputField.addEventListener('blur', () => {
    if (inputField.value === '') {
      let tasks = JSON.parse(localStorage.getItem('taskArr'));
      tasks = removeTask(tasks, fixIndex);
      saveTaskArr(tasks);
      const listDiv = document.getElementById('list');
      listDiv.innerHTML = '';
      tasks.sort((a, b) => a.index - b.index);
      index = 1;
      tasks.forEach((task) => {
        addTask(task, index, icons);
        index += 1;
      });
      completed();
    }
    taskContainer.classList.remove('focus-task');
    checkImg.classList.add('d-off');
    editTask(index, inputField);
    box.removeAttribute('disabled');
  });
};

const renderTask = (tasks, icons) => {
  tasks.sort((a, b) => a.index - b.index);
  index = 1;
  tasks.forEach((task) => {
    addTask(task, index, icons);
    index += 1;
  });
  completed();
  resetCompleted();
  updateIndex(tasks);
};

const addNewTask = (taskInput, icons) => {
  const newIndex = localStorage.getItem('index');
  const task = {
    description: taskInput.value,
    completed: false,
    index: newIndex,
  };
  const tasks = getTasks();
  tasks.push(task);
  saveTaskArr(tasks);
  resetCompleted();
  checkIndex();
  const listDiv = document.getElementById('list');
  listDiv.innerHTML = '';
  renderTask(tasks, icons);
  checkIndex();
  taskInput.value = null;
};

const clearCompleted = (icons) => {
  let tasks = getTasks();
  tasks = tasks.filter((task) => task.completed === false);
  const listDiv = document.getElementById('list');
  listDiv.innerHTML = '';
  updateIndex(tasks);
  localStorage.setItem('taskArr', JSON.stringify(tasks));
  renderTask(tasks, icons);
};

const addEventListeners = (icons) => {
  const taskInput = document.getElementById('input-field');
  const enterBtn = document.getElementById('btn-enter');

  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      if (taskInput.value !== '') {
        addNewTask(taskInput, icons);
      }
    }
  });

  enterBtn.addEventListener('click', () => {
    if (taskInput.value !== '') {
      addNewTask(taskInput, icons);
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
    clearCompleted(icons);
  });
};

export { saveTaskArr, checkIndex, updateIndex, tasksChecker, renderTask, addTask, addNewTask, clearCompleted, createMainSection, addEventListeners }; // eslint-disable-line
