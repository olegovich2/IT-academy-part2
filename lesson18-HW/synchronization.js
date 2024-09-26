import { createCardForTask } from "./createCard.js";

const input = document.querySelector("#input_field_mission");
const body = document.querySelector("body");

const dataFromField = (event) => {
  const inputValue = event.target.value;
  return cardOutput(inputValue);
};
export const deleteChildren = () => {
  const outputChildren = document.querySelector(".output");
  while (outputChildren.firstChild) {
    outputChildren.removeChild(outputChildren.firstChild);
  }
};
export const cardOutput = (data) => {
  deleteChildren();
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      let value = localStorage.getItem(key);
      console.log(data.isTrusted);

      if (data.isTrusted === true) createCardForTask(key, value);
      if (value.indexOf(data) !== -1) createCardForTask(key, value);
    }
  }
};

input.addEventListener("keyup", dataFromField);
document.addEventListener("DOMContentLoaded", cardOutput);
