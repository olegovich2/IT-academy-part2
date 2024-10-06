import {
  createCardForTask,
  deleteChildren,
  getObjectFromLocalStorage,
} from "./createCard.js";

const input = document.querySelector("#input_field");

const dataFromField = (event) => {
  const inputValue = event.target.value;
  return cardOutput(inputValue);
};

const cardOutput = (data) => {
  deleteChildren();
  const object = getObjectFromLocalStorage();
  for (const key in object) {
    let value = object[key];
    if (value.indexOf(data) !== -1) createCardForTask(key, value);
  }
};

input.addEventListener("keyup", dataFromField);
