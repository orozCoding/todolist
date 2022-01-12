function editCompleted(box, tasks, index) {
  if (box.checked) {

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

  for (let i = 0, x = 1; i < boxes.length; i += 1, x += 1) {
    let container = document.getElementById(`task-${x}`);
    let input = document.getElementById(`input-${x}`);
    boxes[i].addEventListener('click', () => {
      if (boxes[i].checked) {
        console.log('Completado ' + tasks[i].description);
        container.classList.add('completed');
        input.style.backgroundColor = 'lightgray';
        input.setAttribute('disabled', 'disabled');
        editCompleted(boxes[i], tasks, x);
      } else {
        container.classList.remove('completed');
        input.style.backgroundColor = '';
        input.removeAttribute('disabled');
        console.log('Descompletado ' + tasks[i].description);
        editCompleted(boxes[i], tasks, x);
      }
    })
  }
}