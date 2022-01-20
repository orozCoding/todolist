const { editTask, updateCompleted, clearCompleted } = require('../editCompleteClear');
const {
  html2, icons, tasks2,
} = require('../html.js');

localStorage.setItem('taskArr', JSON.stringify(tasks2));

describe('Testing task editing', () => {
  test('should edit first task', () => {
    document.body.innerHTML = html2;
    const inputField = document.getElementById('input-1');
    inputField.value = 'It is working';
    editTask(inputField, 1, icons);
    const finalMsg = inputField.value;
    expect(finalMsg).toBe('It is working');
  });

  test('should remove empty task', () => {
    const inputField = document.getElementById('input-3');
    inputField.value = '';
    editTask(inputField, 3, icons);
    const tasksList = document.querySelectorAll('#list li');
    expect(tasksList).toHaveLength(2);
  });
});

describe('Testing completed check', () => {
  test('should edit first task complete status', () => {
    const box = document.getElementById('cb-1');
    box.checked = true;
    updateCompleted(box, 1);
    const tasks = JSON.parse(localStorage.getItem('taskArr'));
    expect(tasks[0].completed).toBe(true);
  });

  test('should edit second task complete status', () => {
    const box = document.getElementById('cb-2');
    box.checked = true;
    updateCompleted(box, 2);
    const tasks = JSON.parse(localStorage.getItem('taskArr'));
    expect(tasks[1].completed).toBe(true);
  });

  test('should edit fisrt task complete status', () => {
    const box = document.getElementById('cb-1');
    box.checked = false;
    updateCompleted(box, 1);
    const tasks = JSON.parse(localStorage.getItem('taskArr'));
    expect(tasks[0].completed).toBe(false);
  });
});

describe('Testing clear all', () => {
  test('Should clear the checked ones', () => {
    clearCompleted(icons);
    const tasks = JSON.parse(localStorage.getItem('taskArr'));
    expect(tasks).toHaveLength(1);
  });
});