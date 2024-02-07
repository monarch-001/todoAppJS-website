export const addTodoButton = document.querySelector('.js_checkbox_input');
export const addTodoInput = document.querySelector('.js_create_todo_input');

export const checkedDivInput = document.querySelector('.creating__todo__input_div .checked__div');

export const remainingItemsText = document.querySelector('.remaining_items_left');

export const modalContainer = document.querySelector('.modal_container')
export const modalDiv = document.querySelector('.js_modal_div');

export const allItemsText = document.querySelector('.all_items');
export const activeText = document.querySelector('.active_items');
export const completedText = document.querySelector('.completed_items');
export const clearCompleted = document.querySelector('.clear_completed');

const themeImg =  document.querySelector('.theme_img');
const backgroundImage = document.querySelector('.background_image');

export const clearAllText = document.querySelector('.clear-all-text');

export let todoArray = JSON.parse(localStorage.getItem('todoArray'));

let words = document.querySelectorAll('.word');

import { typingTextFunction } from './typingText.js';
import { createNewTodo, generateTodoHTML } from './updatingTodo/createTodo.js';
import { addToArray } from './updatingTodo/addToDo.js';
import { filteredTexts } from './updatingTodo/filteredTexts.js';

if(!todoArray) {

    todoArray = [{
       todo: 'Code',
       checked: 'checked__div', // for checkbox
       completed: '' // for todo
    }, {
        todo: 'Build a website',
        checked: 'checked__div', 
        completed: '' 
    }, {
        todo: 'Build a mobile application',
        checked: 'checked__div', 
        completed: '' 
    }]

};

themeImg.addEventListener('click', () => {

    document.body.classList.toggle('light');

    if(document.body.classList.contains('light')) {

        themeImg.src = './images/icon-moon.svg';
        backgroundImage.src = './images/bg-desktop-light.jpg';

    } else {

        themeImg.src = './images/icon-sun.svg';
        backgroundImage.src = './images/bg-desktop-dark.jpg';

    };


});

document.addEventListener('DOMContentLoaded', () => {

    revertedStyles();

});

addToArray();

export function saveToLocalStorage() {

    return localStorage.setItem('todoArray', JSON.stringify(todoArray));

}

filteredTexts();

if (clearCompleted) {

    let clearedLength = 0;

    clearCompleted.addEventListener('click', function () {
        
        clearedLength = todoArray.filter(todo => todo.completed === 'completed').length;
        

        if(clearedLength > 0) {
            
            modalContainer.classList.remove('none');

            
            document.querySelector('.element-to-delete')
                .innerHTML = `${clearedLength} items`

            modalDiv.classList.remove('animation-disappear')
            modalDiv.classList.add('animation-appear');

            document.querySelector('.proceed_button')
            .addEventListener('click', () => {

                setTimeout(() => {

                    todoArray = todoArray.filter(todo => todo.completed !== 'completed');
                    createNewTodo();

                }, 200)


                removeModal(modalDiv, modalContainer)

            });

            document.querySelector('.decline_button')
                .addEventListener('click', () => {
                    removeModal(modalDiv, modalContainer);
                });

        } else {
            alert('There is no Completed item.')
        }

        });
};


createNewTodo();



export function editIconFunction(editIcon, editInput, items) {

    editIcon.forEach(editIcon => {

        const editIconIndex = editIcon.dataset.index;

        editIcon.addEventListener('click', () => {

            editInput.forEach(editInput => {
                
                const editInputIndex = editInput.dataset.index;
                
                if(items[editInputIndex].checked !== 'completed_checked_div' ) {
                    
                    if(editIconIndex === editInputIndex) {
                    
                        if(editInput.classList.contains('none')) {
    
                            editInput.classList.remove('none');
                            editInput.focus();
    
                            editInput.addEventListener('keyup', (e) => {
                        
                                if(e.key === 'Enter' || e.keyCode === 13) {
    
                                    if(e.target.value !== '') {

                                        items.forEach((todoContent, index) => {
                                    
                                            if(index.toString() === editInputIndex) {
                                                todoContent.todo = editInput.value;
                                                saveToLocalStorage();
                                                createNewTodo();
                                            };
                
                                        });
                                        editInput.value = '';
                                        editInput.classList.add('none')

                                    } else {
                                        return;
                                    };
    
                                };
                            });
    
    
                        } else {
    
                            editInput.classList.add('none');
    
                        }
    
                    };
    

                };
                
            });

        });

    });

    revertedStyles();

};


export function removeModal(modalDiv, modalContainer) {

    setTimeout(() => {
    
        modalDiv.classList.add('animation-disappear');

    }, 100);

    setTimeout(() => {

        modalContainer.classList.add('none');

    }, 250);

};

modalContainer.addEventListener('click', (e) => {

    if(!modalDiv.contains(e.target)) {
        removeModal(modalDiv, modalContainer)
    };

});

export function revertedStyles() {

    allItemsText.classList.remove('filtered-text-color');
    allItemsText.classList.remove('hover-state')
    allItemsText.classList.add('active');

    completedText.classList.remove('active');
    completedText.classList.add('filtered-text-color');
    completedText.classList.add('hover-state');

    activeText.classList.remove('active');
    activeText.classList.add('filtered-text-color');
    activeText.classList.add('hover-state');

}

typingTextFunction(words);
