let textFrom = document.querySelector('#form1');
let addButton = document.querySelector('#add');

let todo = document.querySelector('#todo')

let todoList = [];



addButton.addEventListener('click', function (){
    let newTodo = {
        todo: textFrom.value,
        important: false
    }

    todoList.push(newTodo);
    displayMessages();
});



function displayMessages() {
    let displayMessage = ``;
    todoList.forEach(function (item, i) {
        // Определите CSS-класс в зависимости от значения important
        const tdClass = item.important ? 'important-task' : '';

        // Зачеркните текст задачи, если она завершена
        const taskText = item.important ? `<s>${item.todo}</s>` : item.todo;

        displayMessage += `
        <tr>
            <th scope="row">${i + 1}</th>
            <td class="${tdClass}">${taskText}</td>
            <td>
                <button type="button" class="btn btn-danger delete-button" data-index="${i}">Delete</button>
                <button type="button" class="btn btn-success ms-1 finish-button" data-index="${i}">Finished</button>
            </td>
        </tr>
        `;
    });
    todo.innerHTML = displayMessage;

    // Добавьте обработчики событий для кнопок "Delete" и "Finished"
    let deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            let index = event.target.getAttribute('data-index');
            todoList.splice(index, 1);
            displayMessages();
        });
    });

    let finishButtons = document.querySelectorAll('.finish-button');
    finishButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            let index = event.target.getAttribute('data-index');
            // Инвертируйте значение "important" для задачи
            todoList[index].important = !todoList[index].important;
            displayMessages();
        });
    });
}

document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Предотвратить отправку формы

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailValue = emailInput.value.trim();

    // Проверка наличия значения в поле email
    if (emailValue === "") {
        emailError.textContent = "Email is required";
        emailInput.classList.add("is-invalid");
        return;
    } else {
        emailError.textContent = "";
        emailInput.classList.remove("is-invalid");
    }

    // Проверка валидности email-адреса с использованием регулярного выражения
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailValue)) {
        emailError.textContent = "Invalid email format";
        emailInput.classList.add("is-invalid");
        return;
    } else {
        emailError.textContent = "";
        emailInput.classList.remove("is-invalid");
        Swal.fire({
            title: 'You send the message!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000 // Закрыть уведомление через 2 секунды
        });
    }
});

window.onload = function () {
    const display = document.querySelector("#timer");
    const hoursSpan = display.querySelector(".hours");
    const minutesSpan = display.querySelector(".minutes");
    const secondsSpan = display.querySelector(".seconds");

    startCountdown(3600*24, hoursSpan, minutesSpan, secondsSpan);
};

function startCountdown(duration, hoursDisplay, minutesDisplay, secondsDisplay) {
    let timer = duration;
    let hours, minutes, seconds;

    let countdown = setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hoursDisplay.textContent = hours < 10 ? "0" + hours : hours;
        minutesDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
        secondsDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;

        if (--timer < 0) {
            clearInterval(countdown);
        }
    }, 1000);
}







