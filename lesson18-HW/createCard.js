export const tasksStorageKey = "tasks";

const clearLocalStorage = () => {
  for (const key in localStorage) {
    if (key.indexOf("tasks") === -1) {
      localStorage.removeItem(key);
      const object = {};
      localStorage.setItem(tasksStorageKey, JSON.stringify(object));
    }
    if (key.indexOf("tasks") !== -1 && localStorage.hasOwnProperty(key)) return;
  }
};

export const getObjectFromLocalStorage = () => {
  for (const key in localStorage) {
    if (key === tasksStorageKey) {
      return JSON.parse(localStorage.getItem(key));
    }
  }
};

export const deleteChildren = () => {
  const outputChildren = document.querySelector(".output");
  while (outputChildren.firstChild) {
    outputChildren.removeChild(outputChildren.firstChild);
  }
};

const addKeyToLocalStorage = (event) => {
  clearLocalStorage();
  const object = getObjectFromLocalStorage();
  let symbols =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=";
  let password = "";
  for (let i = 0; i < 8; i++) {
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  const key = `task-${password}`;
  event.preventDefault();
  const inputMission = document.querySelector("#input_field_mission");
  object[key] = inputMission.value;
  localStorage.setItem(tasksStorageKey, JSON.stringify(object));
  event.target.reset();
  return getKeyFromLocalStorage();
};

const getKeyFromLocalStorage = () => {
  deleteChildren();
  const object = getObjectFromLocalStorage();
  for (const key in object) {
    createCardForTask(key, object[key]);
  }
};

export const createCardForTask = (key, value) => {
  const output = document.querySelector(".output");
  const newMission = document.createElement("div");
  newMission.className = "newMission";
  newMission.dataset.action = "newMission";
  const p = document.createElement("p");
  p.dataset.action = key;
  p.textContent = value;
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
  newMission.appendChild(p);
  newMission.appendChild(buttonChange);
  newMission.appendChild(buttonDelete);
  output.appendChild(newMission);
};

document.addEventListener("DOMContentLoaded", () => {
  getKeyFromLocalStorage();
  const form = document.querySelector("#submit_form");
  form.addEventListener("submit", addKeyToLocalStorage);
});

window.addEventListener("storage", (event) => {
  if (event.key === tasksStorageKey) getKeyFromLocalStorage();
});
