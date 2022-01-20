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

const updateCompleted = (box, index) => {
  const tasks = JSON.parse(localStorage.getItem('taskArr'));
  const container = document.getElementById(`task-${index}`);
  const input = document.getElementById(`input-${index}`);
  if (box.checked) {
    container.classList.add('completed');
    input.style.backgroundColor = 'lightgray';
    input.setAttribute('disabled', 'disabled');
    editCompleted(box, tasks, index);
  } else {
    container.classList.remove('completed');
    input.style.backgroundColor = '';
    input.removeAttribute('disabled');
    editCompleted(box, tasks, index);
  }
};

export function completed() {
  const boxes = document.querySelectorAll('.task-cb');
  for (let i = 0, x = 1; i < boxes.length; i += 1, x += 1) {
    boxes[i].addEventListener('click', () => {
      updateCompleted(boxes[i], x);
    });
  }
}