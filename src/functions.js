export let index = 1;
export let tasks = [];
export const main = document.getElementById('main');
export const listContainer = document.createElement('div');
listContainer.id = 'list-container';
listContainer.className = 'd-flex';

function updateIndex(tasks){
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
      description: 'You can also edit the text if you click on it!',
      completed: false,
      index: 3,
    },
    {
      description: 'This is an example',
      completed: false,
      index: 1,
    },
    {
      description: 'You can remove the tasks with the right button ->',
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

function addTask(task, index, Trash) {
  const listUl = document.getElementById('list');
  const newTask = document.createElement('li');
  newTask.classList.add('task-container', 'd-flex', 'row');
  newTask.innerHTML = `<input type="checkbox" class="task-cb">
    <input id="input-${index}" type="text" class="task-info">
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
    renderTask(tasks, Trash);
  });
  index += 1;
}

function renderTask(tasks, Trash) {
  tasks.sort((a, b) => a.index - b.index);
  index = 1;
  tasks.forEach((task) => {
    addTask(task, index, Trash);
    index += 1;
  });
}

function reload(tasks, Trash){
  tasksChecker();
  renderTask(tasks, Trash);
  saveTaskArr(tasks);
  checkIndex();
}




export { saveTaskArr, checkIndex, updateIndex, tasksChecker, renderTask, addTask, reload };