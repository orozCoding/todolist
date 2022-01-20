const { addNewTask, removeTask } = require('../AddRemove');
const {
  html, icons, tasks,
} = require('../html');
const { addTask } = require('../theFunctions');

localStorage.setItem('taskArr', JSON.stringify(tasks));
document.body.innerHTML = html;

describe('testing addTask', () => {
  test('should recognize tasks', () => {
    const tasksList = document.querySelectorAll('#list li');
    expect(tasksList).toHaveLength(3);
  });

  test('should add the task 1', () => {
    const taskInput = document.getElementById('input-field');
    taskInput.value = 'Forth task';
    addNewTask(taskInput, icons, addTask);
    const tasksList = document.querySelectorAll('#list li');
    expect(tasksList).toHaveLength(4);
  });

  test('should add the task 2', () => {
    const taskInput = document.getElementById('input-field');
    taskInput.value = 'Fifth task';
    addNewTask(taskInput, icons, addTask);
    const tasksList = document.querySelectorAll('#list li');
    expect(tasksList).toHaveLength(5);
  });
});

describe('testing removeTask', () => {
  test('should recognize tasks', () => {
    const tasksList = document.querySelectorAll('#list li');
    expect(tasksList).toHaveLength(5);
  });

  test('should remove a task', () => {
    removeTask(5, icons, addTask);
    const tasksList = document.querySelectorAll('#list li');
    expect(tasksList).toHaveLength(4);
  });

  test('should remove the first task', () => {
    removeTask(1, icons, addTask);
    const firstInput = document.querySelector('#input-1');
    expect(firstInput.value).toBe('Second task');
  });
});