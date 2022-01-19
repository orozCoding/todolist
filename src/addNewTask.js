import {
  saveTaskArr, resetCompleted, displayTasks, getTasks,
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
export { addNewTask as default };