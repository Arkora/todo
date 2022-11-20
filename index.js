const todoInput = document.querySelector('.add-todo')
const todoButton = document.querySelector('.add-button')
const todoForm = document.querySelector('.todo-form')
const todoList =  document.querySelector(".todo-list")

todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click',deleteTodo)

function addTodo(e){
    e.preventDefault()
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('grid')
    const todoTitle = document.createElement('p')
    todoTitle.innerText = todoInput.value
    const deleteButton = document.createElement('button')
    deleteButton.innerText = "-"
    deleteButton.classList.add('delete-button')
    todoDiv.appendChild(todoTitle)
    todoDiv.appendChild(deleteButton)
    const newTodo = document.createElement('li')
    newTodo.appendChild(todoDiv)

    todoList.appendChild(newTodo)

    todoInput.value= ''
    
}

function deleteTodo(e){

    const item = e.target
    if(item.classList[0] === 'delete-button'){
        const todo = item.parentElement.parentElement
        todo.remove();
    }
}






