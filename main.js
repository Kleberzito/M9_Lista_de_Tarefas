document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskListContainer = document.getElementById('task-list-container');
    const taskList = document.getElementById('task-list');

    function updateTaskListVisibility() {
        if (taskList.children.length === 0) {
            taskListContainer.classList.add('hidden');
        } else {
            taskListContainer.classList.remove('hidden');
        }
    }

    updateTaskListVisibility();

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const task = taskInput.value.trim();

        if (task !== '') {
            const listItem = document.createElement('li');
            const linkItem = document.createElement('a');
            linkItem.href = '#';
            linkItem.onclick = function() {                
                listItem.classList.toggle('completed');
                return false;
            };
            linkItem.textContent = task;
            listItem.appendChild(linkItem);
            taskList.appendChild(listItem);

            updateTaskListVisibility();
            taskInput.value = '';
        }
    });
});
