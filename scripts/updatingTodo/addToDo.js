import { todoArray, addTodoButton, addTodoInput, checkedDivInput, revertedStyles } from '../script.js';
import { createNewTodo } from './createTodo.js';

export function addToArray() {

    addTodoButton.addEventListener('click', () => {

        let spaces = /^\s*$/.test(addTodoInput.value)
    
        if(spaces) {
    
            alert('Input field cannot contain only spaces');
    
            addTodoInput.value = '';
    
            addTodoInput.focus();
    
        } else  if((addTodoInput.value !== '') && (!spaces)) {
    
            todoArray.unshift({
               todo: addTodoInput.value,
                checked: 'checked__div',
                completed: '',
            });
    
            addTodoInput.value = '';
                
            checkedDivInput.classList.add('todo_input_checkdiv_gradient_bg');
    
            setTimeout(() => {
                
                checkedDivInput.classList.remove('todo_input_checkdiv_gradient_bg');
                
            }, 2000);
                
        }
    
        createNewTodo();
    
        revertedStyles();
    
    });
    
    addTodoInput.addEventListener('keydown', (e) => {
    
        if(e.key === 'Enter' || e.keyCode === 13) {
            
            let spaces = /^\s*$/.test(e.target.value)
    
            if((e.target.value !== '') && (!spaces)) {
    
                todoArray.unshift({
                    todo: e.target.value,
                     checked: 'checked__div',
                     completed: '',
                 });    
    
        
                addTodoInput.value = '';
        
                checkedDivInput.classList.add('todo_input_checkdiv_gradient_bg');
        
                setTimeout(() => {
                    
                    checkedDivInput.classList.remove('todo_input_checkdiv_gradient_bg');
                    
                }, 2000);
    
            } else {
    
                let value =  prompt('Input cannot be empty. Please enter a string')
    
                let emptyValue = /^\s*$/.test(value);
    
                if(value !== null) {
    
                    if((value !== '') && (!emptyValue)) {
    
                        todoArray.unshift({
                         todo: value,
                          checked: 'checked__div',
                          completed: '',
                         });
         
                         e.target.value = '';
         
                    } else {
         
                         alert('Field cannot be empty');
         
                         addTodoInput.value = '';
                         
                         addTodoInput.focus();
                    }
                } else if (value === null) {
                    addTodoInput.value = '';
                    addTodoInput.focus();
                    return;
                }
    
    
            }
            
        };
        
        createNewTodo();
    
        revertedStyles();
        
    });

}