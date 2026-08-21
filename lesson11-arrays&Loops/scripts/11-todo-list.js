const todoList = ['run', ['swim']];

renderToddoList();
console.log(todoList);

function renderToddoList(){

    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++){
        const todo = todoList[i];
        const html = `<p>${todo}<p>`;
        todoListHTML += html;
    }

    console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML = todoListHTML = todoListHTML;

}

function addTodo(todo){
    const inputElement = document.querySelector(".js-name-input");
    const name = inputElement.value;

    todoList.push(name);
    console.log(todoList);

    inputElement.value = "";
    renderToddoList();

}



