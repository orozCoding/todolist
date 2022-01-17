import './style.css';
import { icons, checkIndex, tasks, saveTaskArr, tasksChecker, renderTask, createMainSection, addEventListeners } from './functions.js'; // eslint-disable-line

createMainSection();

window.addEventListener('load', () => {
  tasksChecker();
  renderTask(tasks, icons);
  saveTaskArr(tasks);
  checkIndex();
});

addEventListeners(icons);