import { addNewTask, removeTask } from '../test_env/addRemove';
import { html, icons,tasks } from '../test_env/html';
import { addTask } from '../src/theFunctions';

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

 
});