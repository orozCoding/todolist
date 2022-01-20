let index = 1;

const getTasks = () => JSON.parse(localStorage.getItem('taskArr'));

const updateIndex = (tasks) => {
  index = 1;
  tasks.forEach((task) => {
    task.index = index;
    index += 1;
  });
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

const checkIndex = () => {
  if (localStorage.getItem('taskArr')) {
    const newArr = JSON.parse(localStorage.getItem('taskArr'));
    index = newArr.length + 1;
    localStorage.setItem('index', index);
  } else {
    localStorage.setItem('index', '1');
  }
};

const filterTasks = (tasks, index) => {
  const removing = tasks.filter((task) => task.index !== index);
  const currentIndex = localStorage.getItem('index', index);
  const newIndex = currentIndex - 1;
  localStorage.setItem('index', newIndex);
  return removing;
};

const saveTaskArr = (tasks) => {
  localStorage.setItem('taskArr', JSON.stringify(tasks));
  updateIndex(tasks);
  localStorage.setItem('taskArr', JSON.stringify(tasks));
};

function checkBox(tasks, index, state) {
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].index === index) {
      tasks[i].completed = state;
      localStorage.setItem('taskArr', JSON.stringify(tasks));
    }
  }
}

function editCompleted(box, tasks, index) {
  if (box.checked) {
    checkBox(tasks, index, true);
  } else {
    checkBox(tasks, index, false);
  }
}

const updateCompleted = (box, index) => {
  const tasks = JSON.parse(localStorage.getItem('taskArr'));
  const container = document.getElementById(`task-${index}`);
  const input = document.getElementById(`input-${index}`);
  if (box.checked) {
    container.classList.add('completed');
    input.style.backgroundColor = 'lightgray';
    input.setAttribute('disabled', 'disabled');
    editCompleted(box, tasks, index);
  } else {
    container.classList.remove('completed');
    input.style.backgroundColor = '';
    input.removeAttribute('disabled');
    editCompleted(box, tasks, index);
  }
};

function completed() {
  const boxes = document.querySelectorAll('.task-cb');
  for (let i = 0, x = 1; i < boxes.length; i += 1, x += 1) {
    boxes[i].addEventListener('click', () => {
      updateCompleted(boxes[i], x);
    });
  }
}

const changeContent = (index, inputField) => {
  const tasks = getTasks();
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].index === index) {
      tasks[i].description = inputField.value;
      saveTaskArr(tasks);
    }
  }
};

const removeTask = (index, icons) => {
  let tasks = JSON.parse(localStorage.getItem('taskArr'));
  tasks = filterTasks(tasks, index);
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
};

const editTask = (inputField, index) => {
  if (inputField.value === '') {
    let tasks = JSON.parse(localStorage.getItem('taskArr'));
    tasks = filterTasks(tasks, index);
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
  } else {
    const taskContainer = document.getElementById(`task-${index}`);
    const checkImg = document.getElementById(`check-${index}`);
    taskContainer.classList.remove('focus-task');
    checkImg.classList.add('d-off');
    changeContent(index, inputField);
    const box = document.getElementById(`cb-${index}`);
    box.removeAttribute('disabled');
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
    removeTask(fixIndex, icons);
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
    editTask(inputField, fixIndex);
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

const clearCompleted = (icons) => {
  let tasks = getTasks();
  tasks = tasks.filter((task) => task.completed === false);
  const listDiv = document.getElementById('list');
  listDiv.innerHTML = '';
  updateIndex(tasks);
  localStorage.setItem('taskArr', JSON.stringify(tasks));
  renderTask(tasks, icons);
};

module.exports = {
  checkIndex,
  saveTaskArr,
  resetCompleted,
  renderTask,
  getTasks,
  filterTasks,
  addTask,
  completed,
  clearCompleted,
  changeContent,
  updateIndex,
  editCompleted,
};