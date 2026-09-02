const todoList = [{
     name:'run',
     dueDate: '2024-06-30',

    }, {
        
     name: 'swim',
     dueDate: '2024-07-01',
    }];

renderToddoList();
console.log(todoList);

function renderToddoList(){

    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++){
      const todoObject = todoList[i];
      // const name = todoObject.name;
      // const dueDate = todoObject.dueDate;
      const { name, dueDate } = todoObject; // Destructuring method.

      const html = `
                <div>${name}</div>
                <div>${dueDate}</div>
                <button onclick="
                    todoList.splice(${i}, 1);
                    renderToddoList();
                ">Delete</button>`;
      todoListHTML += html;
    }

    console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML = todoListHTML = todoListHTML;

}

function addTodo(todo){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElelement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElelement.value;

  // todoList.push({ name: name, dueDate: dueDate });
  //shorthand property method, if the key and value are the same, you can just write the key name.
  todoList.push({
    name,
    dueDate
  });

  console.log(todoList);

  inputElement.value = '';
  renderToddoList();
}



