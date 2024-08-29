// делегирование
// const actons = {
//   edit: () => {
//     console.log("edit");
//   },
//   delete: () => {
//     console.log("delete");
//   },
// };

// document.addEventListener("click", (e) => {
//   const action = actions[e.target.dataset.action];
//   action();
// });

//
// window.addEventListener("error", (e) => {
//   console.log(e.message);
//   return true;
// });
// window.onerror = (e) => {
//   console.log(e);
//   return true;
// };
// throw new Error("custom error");

//
// const area = document.querySelector("#area");
// const input = document.querySelector("input");
// area?.addEventListener("mousedown", (e) => {
//   console.log(e);
// });
// area?.addEventListener("mouseover", (e) => {
//   console.log(e);
// });
// area?.addEventListener("mouseout", (e) => {
//   console.log(e);
// });
// area?.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   console.log(e);
// });
// area?.addEventListener("dblclick", (e) => {
//   e.preventDefault();
//   console.log(e);
// });
// area?.addEventListener("mousemove", (e) => {
//   e.target.textContent = `e.clientX: ${e.clientX} e.clientY: ${e.clientY}`;
// });
// input?.addEventListener("keydown", (e) => {
//   console.log(e);
// });
// document?.addEventListener("scroll", (e) => {
//     e.preventDefault();
//     console.log(document.body.scrollHeight);
//     console.log(document.body.offsetHeight);
//   console.log(window.scrollY);
// });

//
// const form = document.forms[0];
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(e.target.nikname.value);
// });
// form.elements.nikname.addEventListener("input", (e) => {
//   console.log(e.target.form.dispatchEvent(new SubmitEvent("submit"))); //вернет true or false
// });

// синхронные, асинхронные скрипты, смотри хэдер

// создание скрипта

// const scriptElement = document.createElement("script");
// scriptElement.src = "script.js";
// scriptElement.async = false;
// document.body.append(scriptElement);

// задание
// const hiddenMenues = document.querySelectorAll(
//   "[data-menu][data-default-hidden]"
// );
// const toggleMenuClass = "hidden-menu";
// console.log(hiddenMenues);
// hiddenMenues.forEach((menu) => {
//   menu.classList.add("hidden-menu");
// });
// document.addEventListener("click", (e) => {
//   const toggleMenu =
//     e.target.nodeName === "BUTTON" && e.target.closest("[data-menu]");
//   if (!toggleMenu) return;
//   console.log(toggleMenu);
//   toggleMenu.classList.toggle(toggleMenuClass);
// });

document.querySelector("#async-container").innerHTML;
