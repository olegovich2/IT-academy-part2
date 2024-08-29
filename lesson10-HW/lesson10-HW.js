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
/*создание списка*/
function addTask(event) {
  event.preventDefault();
  const output = document.querySelector(".output");
  const inputMission = document.querySelector("#input_field_mission");
  const newMission = document.createElement("div");
  newMission.className = "newMission";
  newMission.dataset.action = "newMission";
  const input = document.createElement("input");
  input.className = "checkbox";
  input.dataset.action = "checkbox";
  input.type = "checkbox";
  const p = document.createElement("p");
  p.textContent = inputMission.value;
  const buttonChange = document.createElement("button");
  buttonChange.className = "change";
  buttonChange.dataset.action = "change";
  buttonChange.type = "button";
  buttonChange.textContent = "change";
  const buttonDelete = document.createElement("button");
  buttonDelete.className = "delete";
  buttonDelete.dataset.action = "delete";
  buttonDelete.type = "button";
  buttonDelete.textContent = "delete";
  newMission.appendChild(input);
  newMission.appendChild(p);
  newMission.appendChild(buttonChange);
  newMission.appendChild(buttonDelete);
  output.appendChild(newMission);
  event.target.reset();
}

/*функция зачеркивания задачи */
function checkboxChecked(element, index) {
  if (element.checked) {
    element.closest("[data-action = 'newMission']").children[
      index
    ].style.textDecoration = "line-through";
  } else {
    element.closest("[data-action = 'newMission']").children[
      index
    ].style.textDecoration = "";
  }
}

/*функция изменения задачи */
function changeMission(element, index) {
  element.closest("[data-action = 'newMission']").children[index].textContent =
    prompt("Enter the new task name");
}

/*функция удаления задачи */
function deleteMission(element) {
  element.remove();
}

/*делегирование */
const actionBtn = document.querySelector(".output");
actionBtn.onclick = function (event) {
  let target = event.target;
  function count(target) {
    let count = -1;
    for (const key of target.closest("[data-action = 'newMission']").children) {
      count++;
      if (key.tagName === "P") {
        break;
      }
    }
    return count;
  }

  if (target.dataset.action === "checkbox") {
    checkboxChecked(target, count(target));
  } else if (target.dataset.action === "delete") {
    deleteMission(target.closest("[data-action = 'newMission']"));
  } else if (target.dataset.action === "change") {
    changeMission(target, count(target));
  }
};

/*запускаем скрипт после загрузки DOM */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#input_form");
  form.addEventListener("submit", addTask);
});
