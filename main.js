$(document).ready(function() {
    const $taskForm = $('#task-form');
    const $taskInput = $('#task-input');
    const $taskListContainer = $('#task-list-container');
    const $taskList = $('#task-list');

    function updateTaskListVisibility() {
        if ($taskList.children().length === 0) {
            $taskListContainer.removeClass('container');
            $taskListContainer.addClass('hidden');
        } else {
            $taskListContainer.removeClass('hidden');
            $taskListContainer.addClass('container');
        }
    }

    updateTaskListVisibility();

    $taskForm.on('submit', function(event) {
        event.preventDefault();

        const task = $taskInput.val().trim();

        if (task !== '') {
            const $listItem = $('<li>');
            const $linkItem = $('<a href="#">').text(task);
            $linkItem.on('click', function() {
                $(this).parent().toggleClass('completed');
                return false;
            });
            $listItem.append($linkItem);
            $taskList.append($listItem);

            updateTaskListVisibility();            
            $taskInput.val('');
        }
    });
});
