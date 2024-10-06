const clearLocalStorage = () => {
  for (const key in localStorage) {
    if (key.indexOf("task") === -1 && localStorage.hasOwnProperty(key)) {
      localStorage.removeItem(key);
    }
  }
};
const addKeyToLocalStorage = (event) => {
  clearLocalStorage();
  let symbols =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=";
  let password = "";
  for (let i = 0; i < 8; i++) {
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  const key = `task-${password}`;
  event.preventDefault();
  const inputMission = document.querySelector("#input_field_mission");
  localStorage.setItem(key, inputMission.value);
  event.target.reset();
  return getKeyFromLocalStorage(key);
};

const getKeyFromLocalStorage = (key) => {
  const value = localStorage.getItem(key);
  return createCardForTask(key, value);
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
const cardOutputOnLoad = () => {
  for (const key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      let value = localStorage.getItem(key);
      createCardForTask(key, value);
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  cardOutputOnLoad();
  const form = document.querySelector("#input_form");
  form.addEventListener("submit", addKeyToLocalStorage);
});
