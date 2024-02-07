import { saveToLocalStorage } from './script.js';
import { createNewTodo } from './updatingTodo/createTodo.js';


export function todoCheckBoxFunction(todoCheckBox, items) {

    todoCheckBox.forEach(completedBox => {

        completedBox.addEventListener('click', () => {

            const completedBoxIdx = completedBox.dataset.index;

            if(items[completedBoxIdx].completed === 'active-todo-color') {
                items[completedBoxIdx].completed = 'completed';
                saveToLocalStorage();
                createNewTodo();
            };

            document.querySelectorAll('.checked__div')
                .forEach(completedGrad => {

                    const completedGradIdx = completedGrad.dataset.index;

                    if(completedBoxIdx === completedGradIdx) {
                        items[completedBoxIdx].checked = 'completed_checked_div';
                        saveToLocalStorage();
                        createNewTodo();
                    };

                });
            
        });

    });

};