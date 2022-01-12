export let index = 1;
export let tasks = [];
export const main = document.getElementById('main');
export const listContainer = document.createElement('div');
listContainer.id = 'list-container';
listContainer.className = 'd-flex';

function updateIndex(tasks) {
  index = 1;
  tasks.forEach((task) => {
    task.index = index;
    index += 1;
  })
}

function saveTaskArr(tasks) {
  localStorage.setItem('taskArr', JSON.stringify(tasks));
  updateIndex(tasks);
  localStorage.setItem('taskArr', JSON.stringify(tasks));
}

function checkIndex() {
  if (localStorage.getItem('taskArr')) {
    let newArr = JSON.parse(localStorage.getItem('taskArr'));
    index = newArr.length + 1;
    localStorage.setItem('index', index)
  } else {
    localStorage.setItem('index', '1');
  }
}

function tasksChecker() {
  if (localStorage.getItem('taskArr')) {
    return tasks = JSON.parse(localStorage.getItem('taskArr'))
  }
  else {
    return tasks = [{
      description: 'You can also edit any item if you click on it!',
      completed: false,
      index: 3,
    },
    {
      description: 'This is a task example',
      completed: false,
      index: 1,
    },
    {
      description: 'You can remove any item with the button =>',
      completed: false,
      index: 2,
    },
    {
      description: 'Enjoy!',
      completed: false,
      index: 4,
    }];
  }
}

function removeTask(tasks, index) {
  let removing = tasks.filter(task => task.index !== index);
  let currentIndex = localStorage.getItem('index', index);
  let newIndex = currentIndex - 1;
  localStorage.setItem('index', newIndex);
  return removing;
}

function editTask(tasks, index, inputField) {
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].index === index) {
      tasks[i].description = inputField.value;
      saveTaskArr(tasks);
    }
  }
}

function addTask(task, index, Trash, Check) {
  const listUl = document.getElementById('list');
  const newTask = document.createElement('li');
  newTask.id = `task-${index}`;
  newTask.classList.add('task-container', 'd-flex', 'row');
  newTask.innerHTML = `<input type="checkbox" class="task-cb">
    <input id="input-${index}" type="text" class="task-info">
    <img id="check-${index}" src="${Check}" alt="Check Icon" class="click d-off">
    <img id="remove-${index}" src="${Trash}" alt="Remove Icon" class="click">`;
  listUl.appendChild(newTask);
  const input = document.getElementById(`input-${index}`);
  input.value = task.description;
  const remove = document.getElementById(`remove-${index}`);
  let fixIndex = index;
  remove.addEventListener('click', () => {
    tasks = removeTask(tasks, fixIndex);
    saveTaskArr(tasks);
    let listDiv = document.getElementById('list');
    listDiv.innerHTML = '';
    renderTask(tasks, Trash, Check);
  });
  let inputField = document.getElementById(`input-${index}`);
  let taskContainer = document.getElementById(`task-${index}`);
  let checkImg = document.getElementById(`check-${index}`);
  inputField.addEventListener('focus', () => {
    taskContainer.classList.add('focus-task');
    checkImg.classList.remove('d-off');
  })
  inputField.addEventListener('blur', () => {
    if (inputField.value === '') {
      tasks = removeTask(tasks, fixIndex);
      saveTaskArr(tasks);
      let listDiv = document.getElementById('list');
      listDiv.innerHTML = '';
      renderTask(tasks, Trash, Check);
    }
    taskContainer.classList.remove('focus-task');
    checkImg.classList.add('d-off');
    editTask(tasks, index, inputField);
  })
}

function renderTask(tasks, Trash, Check) {
  tasks.sort((a, b) => a.index - b.index);
  index = 1;
  tasks.forEach((task) => {
    addTask(task, index, Trash, Check);
    index += 1;
  });
}

function addNewTask(taskInput, Trash, Check) {
  let newIndex = localStorage.getItem('index');
  let task = {
    description: taskInput.value,
    completed: false,
    index: newIndex,
  }
  tasks.push(task);
  saveTaskArr(tasks);
  checkIndex();
  let listDiv = document.getElementById('list');
  listDiv.innerHTML = '';
  renderTask(tasks, Trash, Check);
  checkIndex();
  taskInput.value = null;
}

export { saveTaskArr, checkIndex, updateIndex, tasksChecker, renderTask, addTask, addNewTask };