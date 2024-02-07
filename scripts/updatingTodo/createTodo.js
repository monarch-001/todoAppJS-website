import { crossImgFunction } from './deleteTodo.js';
import { editIconFunction, saveToLocalStorage, modalContainer, modalDiv, remainingItemsText, todoArray } from '../script.js';
import { todoCheckBoxFunction } from '../editCompletedTodo.js';

export function createNewTodo() {

    let todoListHTML = '';

    todoArray.forEach((todoContent, index ) => {

        if(todoContent.completed === '' || todoContent.completed !== 'completed') {
            todoContent.completed = 'active-todo-color'
        } else if(todoContent.completed === 'completed') {
            todoContent.completed = 'completed'
        };

        todoListHTML += generateTodoHTML(todoContent, index);
        
    });
    
    appendingHTML(todoListHTML);
    
    saveToLocalStorage(); 
    
    const crossImg = document.querySelectorAll('.js-cross-img');
    const editIcon = document.querySelectorAll('.js_edit_icon');
    const editInput = document.querySelectorAll('.js_edit_input');

    // crossImgFunction(crossImg, todoArray);
    crossImgFunction(crossImg, todoArray, modalContainer, modalDiv, todoArray);

    editIconFunction(editIcon, editInput, todoArray);

    const todoCheckBox = document.querySelectorAll('.todo_checkbox_input');

    todoCheckBoxFunction(todoCheckBox, todoArray);

    remainingItemsText.innerHTML = 
        `${todoArray.length} items`;

        return;
    
};

export function generateTodoHTML(todoContent, index) {

    return `

        <div class="todo_container container-${index} flex js-todo-list-container position-relative">
                                    
            <div class="todo-content-container flex alignment" style="gap: 27px;">

                <input type="checkbox" class="todo_checkbox_input" data-index="${index}">

                <p class="js-todo-content todo-content ${todoContent.completed} initial">${todoContent.todo}</p>

                <input type="text" class="edit_input none js_edit_input" data-index="${index}">

                <div class="${todoContent.checked} position-absolute" data-index="${index}">
                </div>

            </div>

            <div class="icon_img_div flex">

                <i class='bx bxs-edit-alt edit_icon js_edit_icon' data-index="${index}"></i>

                <img class="cross_img js-cross-img none" src="./images/icon-cross.svg" alt="icon-cross" data-index="${index}">

            </div>

            <div class="spacing_bottom position-absolute"></div>


        </div>

    `;    

};

export function appendingHTML(todoListHTML) {

    document.querySelector('.todo_container_section')
    .innerHTML = todoListHTML;

};