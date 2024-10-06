import { tasksStorageKey } from "./createCard.js";
import { getObjectFromLocalStorage } from "./createCard.js";
/*функция изменения задачи */
const changeMission = (element, index) => {
  const object = getObjectFromLocalStorage();
  let tagP = element.closest("[data-action = 'newMission']").children[index];
  let newValue = prompt("Enter the new task name");
  object[tagP.dataset.action] = newValue;
  localStorage.setItem(tasksStorageKey, JSON.stringify(object));
  tagP.textContent = newValue;
};

/*функция удаления задачи */
const deleteMission = (element, index) => {
  const object = getObjectFromLocalStorage();
  let containerForMission = element.closest("[data-action = 'newMission']");
  let tagP = element.closest("[data-action = 'newMission']").children[index];
  delete object[tagP.dataset.action];
  localStorage.setItem(tasksStorageKey, JSON.stringify(object));
  containerForMission.remove();
};

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

  if (target.dataset.action === "delete") deleteMission(target, count(target));
  if (target.dataset.action === "change") changeMission(target, count(target));
};
