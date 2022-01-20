import { getTasks, saveTaskArr, resetCompleted, checkIndex, renderTask, filterTasks, completed } from './theFunctions'

function addNewTask(taskInput, icons) {
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
  taskInput.value = null;
}

function removeTask(index, icons, add) {
  let tasks = JSON.parse(localStorage.getItem('taskArr'));
  tasks = filterTasks(tasks, index);
  saveTaskArr(tasks);
  const listDiv = document.getElementById('list');
  listDiv.innerHTML = '';
  tasks.sort((a, b) => a.index - b.index);
  index = 1;
  tasks.forEach((task) => {
    add(task, index, icons);
    index += 1;
  });
  completed();
  resetCompleted();
}

export { addNewTask, removeTask };