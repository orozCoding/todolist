function checkBox(tasks, index, state) {
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].index === index) {
      tasks[i].completed = state;
      localStorage.setItem('taskArr', JSON.stringify(tasks));
    }
  }
}

export function editCompleted(box, tasks, index) {
  if (box.checked) {
    checkBox(tasks, index, true);
  } else {
    checkBox(tasks, index, false);
  }
}

export function completed() {
  const tasks = JSON.parse(localStorage.getItem('taskArr'));
  const boxes = document.querySelectorAll('.task-cb');

  for (let i = 0, x = 1; i < boxes.length; i += 1, x += 1) {
    const container = document.getElementById(`task-${x}`);
    const input = document.getElementById(`input-${x}`);
    boxes[i].addEventListener('click', () => {
      if (boxes[i].checked) {
        container.classList.add('completed');
        input.style.backgroundColor = 'lightgray';
        input.setAttribute('disabled', 'disabled');
        editCompleted(boxes[i], tasks, x);
      } else {
        container.classList.remove('completed');
        input.style.backgroundColor = '';
        input.removeAttribute('disabled');
        editCompleted(boxes[i], tasks, x);
      }
    });
  }
}