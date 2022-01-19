import {
  saveTaskArr, getTasks, reRender 
} from './isolated_functions';

const filterTax = (tasks, index) => {
  const removing = tasks.filter((task) => task.index !== index);
  return removing;
};

const removeTask = (fixIndex, icons, add) => {
  let tasks = getTasks();
  console.log('the task array is ' + tasks);
  tasks = filterTax(tasks, fixIndex);
  saveTaskArr(tasks);
  console.log('the tasks I saved was ' + tasks)
  reRender(tasks, icons, add);
};

export { removeTask };