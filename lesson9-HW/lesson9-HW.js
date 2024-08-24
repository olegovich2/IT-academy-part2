/* Задача: Интерактивный список задач с делегированием событий
Описание
Создайте интерактивное приложение для управления списком задач (To-Do List) с использованием делегирования событий. Приложение должно позволять добавлять новые задачи, удалять задачи и отмечать задачи как выполненные. Все операции должны выполняться с использованием одного обработчика события на родительском элементе списка.
Шаги
Создайте базовую структуру HTML:
Создайте текстовое поле для ввода новой задачи.
Создайте кнопку для добавления задачи.
Создайте ненумерованный список (<ul>) для отображения задач.
Добавьте обработчики событий для элементов:
Используйте делегирование событий для обработки кликов на кнопках 
Объяснение
HTML:
Создаем текстовое поле для ввода новой задачи и кнопку для добавления задачи.
Создаем ненумерованный список (<ul>) для отображения задач.
JavaScript:
Добавляем обработчик события DOMContentLoaded, чтобы убедиться, что DOM полностью загружен перед выполнением скриптов.
Создаем функцию addTask для добавления новых задач в список.
Добавляем обработчик события click для кнопки добавления задачи.
Используем делегирование событий для управления задачами, добавляя один обработчик события click на родительском элементе списка (<ul>).
Дополнительные задачи
Добавьте возможность редактирования задачи:
Добавьте кнопку "Edit" для каждой задачи, которая позволяет редактировать текст задачи.
удаления и отметки выполнения задач.
*/

/*запускаем скрипт после загрузки DOM */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", addTask);
});

function addTask(event) {
  event.preventDefault();
  /*создание списка с возможностью удаления,изменения,зачеркивания текста */
  const output = document.querySelector(".output");
  const inputMission = document.querySelector("#mission");
  const formMission = document.createElement("form");
  formMission.className = "formMission";
  const input = document.createElement("input");
  input.className = "checkbox";
  input.type = "checkbox";
  const p = document.createElement("p");
  p.textContent = inputMission.value;
  const buttonChange = document.createElement("button");
  buttonChange.className = "change";
  buttonChange.type = "button";
  buttonChange.textContent = "change";
  const buttonDelete = document.createElement("button");
  buttonDelete.className = "delete";
  buttonDelete.type = "button";
  buttonDelete.textContent = "delete";
  formMission.appendChild(input);
  formMission.appendChild(p);
  formMission.appendChild(buttonChange);
  formMission.appendChild(buttonDelete);
  output.appendChild(formMission);
  event.target.reset();
  /*делегирование */
  const formMissions = document.querySelectorAll(".formMission");
  formMissions.forEach((element) => {
    element.onclick = function (event) {
      let target = event.target;
      if (target.tagName === "INPUT") {
        checkboxChecked(target);
      } else if (target.className === "delete") {
        deleteMission(element);
      } else if (target.className === "change") {
        changeMission(target);
      }
    };
  });
}
/*функция зачеркивания задачи */
function checkboxChecked(element) {
  if (element.checked) {
    element.nextSibling.style.textDecoration = "line-through";
  } else {
    element.nextSibling.style.textDecoration = "";
  }
}
/*функция изменения задачи */
function changeMission(element) {
  element.previousElementSibling.textContent = prompt(
    "Enter the new task name"
  );
}
/*функция удаления задачи */
function deleteMission(element) {
  element.remove();
}
