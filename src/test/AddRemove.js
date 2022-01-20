const {
  getTasks, saveTaskArr, resetCompleted, checkIndex, renderTask, filterTasks, addTask, completed,
} = require('./theFunctions');

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

function removeTask(index, icons) {
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
}

module.exports = { addNewTask, removeTask };