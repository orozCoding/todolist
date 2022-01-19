import {
  saveTaskArr, resetCompleted, displayTasks, getTasks, filterTax, reRender,
} from './functions';

const addNewTask = (taskInput, icons) => {
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

const removeTask = (fixIndex, icons, add) => {
  let tasks = getTasks();
  tasks = filterTax(tasks, fixIndex);
  saveTaskArr(tasks);
  reRender(tasks, icons, add);
};
export { addNewTask, removeTask };