/*функция изменения задачи */
const changeMission = (element, index) => {
  let tagP = element.closest("[data-action = 'newMission']").children[index];
  let newValue = prompt("Enter the new task name");
  localStorage.setItem(tagP.dataset.action, newValue);
  tagP.textContent = newValue;
};

/*функция удаления задачи */
const deleteMission = (element, index) => {
  let containerForMission = element.closest("[data-action = 'newMission']");
  let tagP = element.closest("[data-action = 'newMission']").children[index];
  localStorage.removeItem(tagP.dataset.action);
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
