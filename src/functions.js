import { completed } from './completed';

export let tasks = []; // eslint-disable-line
export const main = document.getElementById('main');
export const listContainer = document.createElement('div');

let index = 1;

listContainer.id = 'list-container';
listContainer.className = 'd-flex';

function updateIndex(tasks) {
  index = 1;
  tasks.forEach((task) => {
    task.index = index;
    index += 1;
  });
}

function getTasks() {
  return JSON.parse(localStorage.getItem('taskArr'));
}

function saveTaskArr(tasks) {
  localStorage.setItem('taskArr', JSON.stringify(tasks));
  updateIndex(tasks);
  localStorage.setItem('taskArr', JSON.stringify(tasks));
}

function checkIndex() {
  if (localStorage.getItem('taskArr')) {
    const newArr = JSON.parse(localStorage.getItem('taskArr'));
    index = newArr.length + 1;
    localStorage.setItem('index', index);
  } else {
    localStorage.setItem('index', '1');
  }
}

function tasksChecker() {
  if (localStorage.getItem('taskArr')) {
    tasks = JSON.parse(localStorage.getItem('taskArr'));
    return tasks;
  }
  tasks = [];
  localStorage.setItem('taskArr', JSON.stringify(tasks))
}

function removeTask(tasks, index) {
  const removing = tasks.filter((task) => task.index !== index);
  const currentIndex = localStorage.getItem('index', index);
  const newIndex = currentIndex - 1;
  localStorage.setItem('index', newIndex);
  return removing;
}

function editTask(index, inputField) {
  const tasks = getTasks();
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].index === index) {
      tasks[i].description = inputField.value;
      saveTaskArr(tasks);
    }
  }
}

function resetCompleted() {
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
}

function addTask(task, index, Trash, Check) {
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
      addTask(task, index, Trash, Check);
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
        addTask(task, index, Trash, Check);
        index += 1;
      });
      completed();
    }
    taskContainer.classList.remove('focus-task');
    checkImg.classList.add('d-off');
    editTask(index, inputField);
    box.removeAttribute('disabled');
  });
}

function renderTask(tasks, Trash, Check) {
  tasks.sort((a, b) => a.index - b.index);
  index = 1;
  tasks.forEach((task) => {
    addTask(task, index, Trash, Check);
    index += 1;
  });
  completed();
  resetCompleted();
  updateIndex(tasks);
}

function addNewTask(taskInput, Trash, Check) {
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
  renderTask(tasks, Trash, Check);
  checkIndex();
  taskInput.value = null;
}

function clearCompleted(Trash, Check) {
  let tasks = getTasks();
  tasks = tasks.filter((task) => task.completed === false);
  const listDiv = document.getElementById('list');
  listDiv.innerHTML = '';
  updateIndex(tasks);
  localStorage.setItem('taskArr', JSON.stringify(tasks));
  renderTask(tasks, Trash, Check);
}

export { saveTaskArr, checkIndex, updateIndex, tasksChecker, renderTask, addTask, addNewTask, clearCompleted }; // eslint-disable-line
