import {expect} from '@jest/globals'
describe('addNewTask',()=>{
    
    test('should add an task',()=>{
       document.body.innerHTML =  `
        <input type="text" id="input-field" placeholder="Add to your list...">
        <ul id="list" class="d-flex"><li id="task-1" class="task-container d-flex row"><input type="checkbox" id="cb-1" class="task-cb">
  <input id="input-1" type="text" class="task-info">
  <img id="check-1" src="http://localhost:8080/d3632c6616bf762ec4b7.svg" alt="Check Icon" class="click d-off">
  <img id="remove-1" src="http://localhost:8080/d55ba7a6c87c02d88d37.svg" alt="Remove Icon" class="click"></li><li id="task-2" class="task-container d-flex row"><input type="checkbox" id="cb-2" class="task-cb">
  <input id="input-2" type="text" class="task-info">
  <img id="check-2" src="http://localhost:8080/d3632c6616bf762ec4b7.svg" alt="Check Icon" class="click d-off">
  <img id="remove-2" src="http://localhost:8080/d55ba7a6c87c02d88d37.svg" alt="Remove Icon" class="click"></li><li id="task-3" class="task-container d-flex row"><input type="checkbox" id="cb-3" class="task-cb">
  <input id="input-3" type="text" class="task-info">
  <img id="check-3" src="http://localhost:8080/d3632c6616bf762ec4b7.svg" alt="Check Icon" class="click d-off">
  <img id="remove-3" src="http://localhost:8080/d55ba7a6c87c02d88d37.svg" alt="Remove Icon" class="click"></li><li id="task-4" class="task-container d-flex row"><input type="checkbox" id="cb-4" class="task-cb">
  <input id="input-4" type="text" class="task-info">
  <img id="check-4" src="http://localhost:8080/d3632c6616bf762ec4b7.svg" alt="Check Icon" class="click d-off">
  <img id="remove-4" src="http://localhost:8080/d55ba7a6c87c02d88d37.svg" alt="Remove Icon" class="click"></li><li id="task-5" class="task-container d-flex row"><input type="checkbox" id="cb-5" class="task-cb">
  <input id="input-5" type="text" class="task-info">
  <img id="check-5" src="http://localhost:8080/d3632c6616bf762ec4b7.svg" alt="Check Icon" class="click d-off">
  <img id="remove-5" src="http://localhost:8080/d55ba7a6c87c02d88d37.svg" alt="Remove Icon" class="click"></li></ul>
        `
        const taskInput = document.querySelector('#input-field')
        const icons = {
            Load,
            Trash,
            Enter,
            Check,
          }

        addNewTask(taskInput, icons);
        
    })
})