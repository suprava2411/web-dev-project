document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskInput = document.getElementById('task');
    const task = taskInput.value;

    if (task.trim() !== '') {
        addTask(task);
        taskInput.value = '';
    }
});

function addTask(task) {
    const tasksContainer = document.getElementById('tasks');

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.innerText = task;

    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    tasksContainer.appendChild(taskItem);
}
