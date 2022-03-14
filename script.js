
let form = document.querySelector('form');
let ul = document.querySelector('ul');
let todoInput = document.getElementById('todo_text_input');

let firstColor = document.getElementById('todo_color_1_selector')
let secondColor = document.getElementById('todo_color_2_selector')
let thirdColor = document.getElementById('todo_color_3_selector')
let fourthColor = document.getElementById('todo_color_4_selector')
let fifthColor = document.getElementById('todo_color_5_selector')
let sixthColor = document.getElementById('todo_color_6_selector')

colors = []
colors.push({colorBox: firstColor, color: '#530cff'});
colors.push({colorBox: secondColor, color: '#ffa400'});
colors.push({colorBox: thirdColor, color: 'green'});
colors.push({colorBox: fourthColor, color: 'red'});
colors.push({colorBox: fifthColor, color: '#00d669'});
colors.push({colorBox: sixthColor, color: 'blue'});

let selectedColor;
let selectedBox;

function selectColor(color, colorBox) {
    return () => {
        if(colorBox !== selectedBox) {
            selectedColor = color
            colorBox.style.borderColor = 'orange';

            if (selectedBox) {
                selectedBox.style.borderColor = 'transparent'
            }
            selectedBox = colorBox;
        }
    }
}

function arrayRandElement(arr) {
    const rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

colors.forEach(({colorBox, color}) => {
    colorBox.addEventListener('click', selectColor(color, colorBox))
})

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

function setRandomColor() {
    const {color, colorBox} = arrayRandElement(colors);
    selectColor(color,colorBox)();
}

function handleSubmitForm(e) {
    e.preventDefault();

    if (todoInput.value != '')
        addTodo(todoInput.value);
    todoInput.value = '';
    setRandomColor()
}

form.addEventListener('submit', handleSubmitForm);
setRandomColor()

