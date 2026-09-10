// / 11x update the todList to use localStorage (if we modify the todoList and refresh the page, the todo list should stay the same. you can use JSON.stringify() and JSON.parse() to store and retrieve the todoList from localStorage).

let todoList = JSON.parse(localStorage.getItem('todoList')) || [
  {
    name: 'run',
    dueDate: '2024-06-30'
  },
  {
    name: 'swim',
    dueDate: '2024-07-01'
  }
];


renderToddoList();
console.log(todoList);

function renderToddoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject; // Destructuring method.

    const html = `
                <div>${name}</div>
                <div>${dueDate}</div>
                <button onclick="
                    todoList.splice(${i}, 1);
                    saveToStorage(); 
                    renderToddoList();
                    " class="delete-todo-button">Delete</button>`;
    todoListHTML += html;
  }

  console.log(todoListHTML);
  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElelement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElelement.value || 'no date';


  // todoList.push({ name: name, dueDate: dueDate });
  //shorthand property method, if the key and value are the same, you can just write the key name.
  todoList.push({
    name,
    dueDate
  });

  console.log(todoList);

  inputElement.value = '';
  dateInputElelement.value = '';

  //To avoid the element being lost when the page is refreshed, we add saveToStorage() function to store the todoList in the browser's memory.
  saveToStorage();
  renderToddoList();

}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}