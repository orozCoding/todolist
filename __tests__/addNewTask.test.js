/**
 * @jest-environment jsdom
 */
import { expect, jest, beforeEach } from '@jest/globals'
import { addNewTask, removeTask } from '../src/addNewTask'
import { getTasks } from '../src/isolated_functions'

jest.mock('../src/isolated_functions')

beforeEach(()=>{
  document.body.innerHTML = `
  <input type="text" id="input-field" placeholder="Add to your list...">
  <ul id="list" class="d-flex">
  <li>Helloooo</li>
  <li>Hey</li>
  </ul>
   `
})

describe('addNewTask', () => {

  const icons = {
    Load: '',
    Trash: '',
    Enter: '',
    Check: '',
  }

  document.body.innerHTML = `
  <input type="text" id="input-field" placeholder="Add to your list...">
  <ul id="list" class="d-flex">
  <li>Helloooo</li>
  <li>Hey</li>
  </ul>
   `
  getTasks.mockImplementation(() => [{ description: "task number 1", completed: false, index: 1 }, { description: "task number 2", completed: false, index: 2 }])

  const taskInput = document.querySelector('#input-field')

  it('should not add an empty task', () => {
    taskInput.value = ''
    addNewTask(taskInput, icons);
    const list = document.querySelectorAll('#list li')
    expect(list).toHaveLength(2)
  })
  it('should add a task', () => {
    taskInput.value = 'hey'
    addNewTask(taskInput, icons);
    const list = document.querySelectorAll('#list li')
    expect(list).toHaveLength(3)
  })
})

describe('removeTask', () => {
  
  
  const icons = {
    Load: '',
    Trash: '',
    Enter: '',
    Check: '',
  }  
  
  it('should remove second task', () => {
  
   let add = jest.fn();
   
   removeTask(1, icons, add); 
   
   const list = document.querySelectorAll('#list li')
    expect(list).toHaveLength(1);
  })
});