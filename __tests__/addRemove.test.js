import { html, tasks } from '../test_env/html';

localStorage.setItem('taskArr', JSON.stringify(tasks));
document.body.innerHTML = html;

describe('testing addTask', () => {
  test('should recognize tasks', () => {
    const tasksList = document.querySelectorAll('#list li');
    expect(tasksList).toHaveLength(3);
  });
});
