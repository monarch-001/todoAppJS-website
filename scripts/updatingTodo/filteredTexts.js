import { todoCheckBoxFunction } from '../editCompletedTodo.js';
import { editIconFunction, revertedStyles, activeText, allItemsText, clearAllText, completedText, todoArray, remainingItemsText, modalContainer, modalDiv, removeModal, saveToLocalStorage } from '../script.js';
import { appendingHTML, createNewTodo, generateTodoHTML } from './createTodo.js';
import { crossImgFunction } from './deleteTodo.js';

export function filteredTexts() {

    activeText.addEventListener('click', () => {

        let active = '';
    
        let todoListHTML = '';
    
        const filteredTodos = todoArray.filter(todoContent => todoContent.completed === 'active-todo-color');
    
        active = filteredTodos.length
    
        filteredTodos.forEach((todoContent, index) => {
    
            todoListHTML += generateTodoHTML(todoContent, index);
            
        });
        
        appendingHTML(todoListHTML);
    
        const crossImg = document.querySelectorAll('.js-cross-img');
        const editIcon = document.querySelectorAll('.js_edit_icon');
        const editInput = document.querySelectorAll('.js_edit_input');
    
        // crossImgFunction(crossImg, filteredTodos);
        crossImgFunction(crossImg, filteredTodos)
        editIconFunction(editIcon, editInput, filteredTodos);
    
        allItemsText.classList.remove('active');
        allItemsText.classList.add('filtered-text-color');
        allItemsText.classList.add('hover-state');
    
        completedText.classList.remove('active');
        completedText.classList.add('filtered-text-color');
        completedText.classList.add('hover-state')
    
        activeText.classList.remove('filtered-text-color');
        activeText.classList.remove('hover-state');
        activeText.classList.add('active');
    
        const todoCheckBox = document.querySelectorAll('.todo_checkbox_input');
    
        todoCheckBoxFunction(todoCheckBox, filteredTodos);
    
        remainingItemsText.innerHTML = 
        `${active} items`;
    
    
    });
    
    completedText.addEventListener('click', () => {
    
        let completed = '';
    
        let todoListHTML = '';
    
        const filteredTodos = todoArray.filter(todoContent => todoContent.completed === 'completed');
    
        completed = filteredTodos.length;
    
        filteredTodos.forEach((todoContent, index) => {
    
            todoListHTML += generateTodoHTML(todoContent, index);
    
        });
    
        appendingHTML(todoListHTML);
    
        const crossImg = document.querySelectorAll('.js-cross-img');
        const editIcon = document.querySelectorAll('.js_edit_icon');
        const editInput = document.querySelectorAll('.js_edit_input');
    
        // crossImgFunction(crossImg, filteredTodos);
        crossImgFunction(crossImg, filteredTodos)
    
        editIconFunction(editIcon, editInput, filteredTodos);
    
        allItemsText.classList.remove('active');
        allItemsText.classList.add('hover-state');
        allItemsText.classList.add('filtered-text-color');
    
        completedText.classList.remove('filtered-text-color');
        completedText.classList.remove('hover-state');
        completedText.classList.add('active');
    
        activeText.classList.remove('active');
        activeText.classList.add('filtered-text-color');
        activeText.classList.add('hover-state');
    
        remainingItemsText.innerHTML = 
        `${completed} items`;
    
    });
    
    allItemsText.addEventListener('click', () => {
    
        createNewTodo();
    
        revertedStyles();
    
    });
    
    clearAllText.addEventListener('click', () => {
        
        revertedStyles();
    
        modalContainer.classList.remove('none');
                        
        document.querySelector('.element-to-delete')
            .innerHTML = `${todoArray.length} items`;
    
        modalDiv.classList.remove('animation-disappear')
        modalDiv.classList.add('animation-appear');
    
        document.querySelector('.proceed_button')
            .addEventListener('click', () => {
                        
                setTimeout(() => {
                    todoArray.splice(0, todoArray.length);
                    createNewTodo();
                    saveToLocalStorage();
    
                }, 200);
                    
                removeModal(modalDiv, modalContainer);   
                revertedStyles();
    
            });
    
    
        document.querySelector('.decline_button')
        .addEventListener('click', () => {
            removeModal(modalDiv, modalContainer);
            createNewTodo();
        });     
        
    });

}