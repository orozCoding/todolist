export let index = 1;
export let tasks = [];

function saveTaskArr(tasks) {
  localStorage.setItem('taskArr', JSON.stringify(tasks));
}

function checkIndex() {
  if (localStorage.getItem('taskArr')) {
    let newArr = JSON.parse(localStorage.getItem('taskArr'));
    index = newArr.length
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
      description: 'Finish the project',
      completed: false,
      index: 3,
    },
    {
      description: 'Buy dinner',
      completed: false,
      index: 1,
    },
    {
      description: 'Walk the dog',
      completed: false,
      index: 2,
    },
    {
      description: 'Help mom with the TV',
      completed: false,
      index: 4,
    }];
  }
}

function updateIndex(tasks){
  index = 1;
  tasks.forEach((task) => {
    task.index = index;
    index += 1;
  })
}

function removeTask(tasks, index) {
  index = localStorage.getItem('index');
  index -= 1;
  localStorage.setItem('index', index);
  console.log('el nuevo index es ' + index);
  return tasks.filter(task => task.index !== index);
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
    console.log('tasks is ' + tasks)
    console.log('fixIndex ' + fixIndex)
    tasks = removeTask(tasks, fixIndex);
    console.log(tasks);
    saveTaskArr(tasks);
    remove.parentElement.remove();
  });
  index += 1;
  console.log('index actual es '+index);
  localStorage.setItem('index', index);
}

function renderTask(tasks, Trash) {
  tasks.sort((a, b) => a.index - b.index);
  index = 1;
  tasks.forEach((task) => {
    addTask(task, index, Trash);
    index += 1;
  });
}




export { saveTaskArr, checkIndex, updateIndex, tasksChecker, renderTask, addTask };