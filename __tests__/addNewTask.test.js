/**
 * @jest-environment jsdom
 */
import {expect,jest} from '@jest/globals'
import { addNewTask } from '../src/addNewTask'
import {getTasks} from '../src/isolated_functions'

jest.mock('../src/isolated_functions')

describe('addNewTask',()=>{
 
  getTasks.mockImplementation(()=>[{description: "task number 1", completed: false, index: 1}, {description: "task number 2", completed: false, index: 2}])
    
  document.body.innerHTML =  `
   <input type="text" id="input-field" placeholder="Add to your list...">
   <ul id="list" class="d-flex">
   <li>Hey</li>
   <li>Hey</li>
</ul>
    `
    const taskInput = document.querySelector('#input-field')
    const icons = {
      Load :'',
      Trash : '',
      Enter : '',
      Check : '',
    }
    it('should not add an empty task',()=>{   
      taskInput.value = ''
      addNewTask(taskInput, icons);
      const list = document.querySelectorAll('#list li')
      expect(list).toHaveLength(2)
  })
    it('should add an task',()=>{   
        taskInput.value = 'hey'
        addNewTask(taskInput, icons);
        const list = document.querySelectorAll('#list li')
        expect(list).toHaveLength(3)
    })
    
    
})