import { editTask } from '../test_env/editCompleteClear';
import { html2, icons, tasks2 } from '../test_env/html';
import { addTask } from '../src/theFunctions';

localStorage.setItem('taskArr', JSON.stringify(tasks2));

describe('Testing task editing', () => {
  test('should edit first task', () => {
    document.body.innerHTML = html2;
    const inputField = document.getElementById('input-1');
    inputField.value = 'It is working';
    editTask(inputField, 1, icons, addTask);
    const tasks = JSON.parse(localStorage.getItem('taskArr'));
    expect(tasks[0].description).toBe('It is working');
  });

  test('should remove empty task', () => {
    const inputField = document.getElementById('input-3');
    inputField.value = '';
    editTask(inputField, 3, icons, addTask);
    const tasksList = document.querySelectorAll('#list li');
    expect(tasksList).toHaveLength(2);
  });
});