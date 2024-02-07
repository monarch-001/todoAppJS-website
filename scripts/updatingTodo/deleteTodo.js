import { saveToLocalStorage, removeModal, revertedStyles, clearCompleted, modalContainer, modalDiv, todoArray } from '../script.js';
import { createNewTodo } from './createTodo.js';

export function crossImgFunction(crossImg, items) {

    crossImg.forEach(crossImg => {

        crossImg.addEventListener('click', () => {

            const crossImgIdx = crossImg.dataset.index;

            items.forEach((todoContent, index) => {

                if(Number(crossImgIdx) === index) {
                    
                    modalContainer.classList.remove('none');
                    
                    document.querySelector('.element-to-delete')
                        .innerHTML = todoContent.todo

                    modalDiv.classList.remove('animation-disappear')
                    modalDiv.classList.add('animation-appear');

                    document.querySelector('.proceed_button')
                        .addEventListener('click', () => {

                            todoArray.forEach((todos, index) => {
                                
                                if(todoContent.todo === todos.todo) {
                                    
                                    setTimeout(() => {
                                        todoArray.splice(index, 1);
                                        createNewTodo();
                                        saveToLocalStorage();
        
                                    }, 200);

                                }
        
                            });

                            removeModal(modalDiv, modalContainer);   
                            revertedStyles();

                        });

                    document.querySelector('.decline_button')
                    .addEventListener('click', () => {
                        removeModal(modalDiv, modalContainer);
                    });    

                };

            });

        })
    });

    revertedStyles();

};