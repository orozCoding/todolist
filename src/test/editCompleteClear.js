import { saveTaskArr, completed, changeContent, updateIndex,
  editCompleted, renderTask, getTasks, filterTasks } from './theFunctions';

const editTask = (inputField, index, icons, add) => {
  if (inputField.value === '') {
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

const clearCompleted = (icons) => {
  let tasks = getTasks();
  tasks = tasks.filter((task) => task.completed === false);
  const listDiv = document.getElementById('list');
  listDiv.innerHTML = '';
  updateIndex(tasks);
  localStorage.setItem('taskArr', JSON.stringify(tasks));
  renderTask(tasks, icons);
};

export { editTask, updateCompleted, clearCompleted };
