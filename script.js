
let form = document.querySelector('form');
let ul = document.querySelector('ul');
let todoInput = document.getElementById('todo_text_input');

let firstColor = document.getElementById('todo_color_1')
let secondColor = document.getElementById('todo_color_2')
let thirdColor = document.getElementById('todo_color_3')
let fourthColor = document.getElementById('todo_color_4')
let fifthColor = document.getElementById('todo_color_5')
let sixthColor = document.getElementById('todo_color_6')

let selectedColor = '#FFFFFF'
let selectedBox;

function selectColor(color, colorBox) {
    return () => {
        selectedColor = color
        colorBox.style.border = '1px solid orange';
        if (selectedBox) {
            selectedBox.style.border = 'none'
        }
        selectedBox = colorBox;
    }
}

firstColor.addEventListener('click', selectColor('#530cff', firstColor));
secondColor.addEventListener('click', selectColor('#ffa400', secondColor));
thirdColor.addEventListener('click', selectColor('green', thirdColor));
fourthColor.addEventListener('click', selectColor('red', fourthColor));
fifthColor.addEventListener('click', selectColor('#00d669', fifthColor));
sixthColor.addEventListener('click', selectColor('blue', sixthColor));

function addTodo(todo) {
    const todoColor = selectedColor;

    let checkbox = document.createElement('div');
    checkbox.className = 'todo_check';
    checkbox.innerHTML = `<input type="checkbox" class="check">`;
    checkbox.style.backgroundColor = todoColor;

    let text = document.createElement('div');
    text.className = 'todo_text';
    text.innerHTML = `<span>${todo}</span>`;
    text.style.backgroundColor = todoColor;

    let todoWrapper = document.createElement('div');
    todoWrapper.appendChild(checkbox);
    todoWrapper.appendChild(text);
    todoWrapper.classList.add('todo_checkbox');

    let isChecked = false;

    checkbox.addEventListener('change', () => {
        if(!isChecked) {
            isChecked = true;
            checkbox.style.backgroundColor = '#cccccc';
            text.style.backgroundColor = '#cccccc';
            text.style.textDecoration = 'line-through';
            return
        }
        checkbox.style.backgroundColor = todoColor;
        text.style.backgroundColor = todoColor;
        text.style.textDecoration = 'none';

        isChecked = false
    })
    ul.appendChild(todoWrapper);
}

function handleSubmitForm(e) {
    e.preventDefault();

    if (todoInput.value != '')
        addTodo(todoInput.value);
    todoInput.value = '';
}

form.addEventListener('submit', handleSubmitForm);

