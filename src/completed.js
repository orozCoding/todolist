function editCompleted(box, tasks, index) {
  if(box.checked){
    
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].index === index) {
        tasks[i].completed = true;
        localStorage.setItem('taskArr', JSON.stringify(tasks));
      }
    }
  } else {
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].index === index) {
        tasks[i].completed = false;
        localStorage.setItem('taskArr', JSON.stringify(tasks));
      }
    }
  }
  
}

export default function completed() {
  let tasks = JSON.parse(localStorage.getItem('taskArr'));
  let boxes = document.querySelectorAll('.task-cb');
  console.log(boxes.length);

  for (let i = 0, x = 1; i < boxes.length; i += 1, x += 1) {
    let container = document.getElementById(`task-${x}`);
    let input = document.getElementById(`input-${x}`);
    boxes[i].addEventListener('click', () => {
      if (boxes[i].checked) {
        console.log('this is the box ' + x);
        console.log('I should remove ' + tasks[i].description);
        container.classList.add('completed');
        input.style.backgroundColor = 'lightgray';
        editCompleted(boxes[i], tasks, x);
      } else {
        console.log('this is the box ' + x);
        console.log('I should NOT remove ' + tasks[i].description);
        container.classList.remove('completed');
        input.style.backgroundColor = '';
        editCompleted(boxes[i], tasks, x);
      }
    })
  }
}