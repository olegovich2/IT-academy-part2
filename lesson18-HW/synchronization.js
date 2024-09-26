import { createCardForTask } from "./createCard.js";

const input = document.querySelector("#input_field");

const dataFromField = (event) => {
  const inputValue = event.target.value;
  return cardOutput(inputValue);
};
const deleteChildren = () => {
  const outputChildren = document.querySelector(".output");
  while (outputChildren.firstChild) {
    outputChildren.removeChild(outputChildren.firstChild);
  }
};
const cardOutput = (data) => {
  deleteChildren();
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      let value = localStorage.getItem(key);
      if (data.isTrusted === true) createCardForTask(key, value);
      if (value.indexOf(data) !== -1) createCardForTask(key, value);
    }
  }
};

input.addEventListener("keyup", dataFromField);
document.addEventListener("DOMContentLoaded", cardOutput);
