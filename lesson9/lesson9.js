const elem = document.querySelector("#imhere");
// elem.onclick = () => {
//   alert("clicked");
//   return false;
// };
// elem.onclick = null; //удаление

//
// const clickHandler = () => {
//   alert("clicked");
// };
// elem.addEventListener("click", clickHandler);
// elem.removeEventListener("click", clickHandler);

//

// const clickHandler = function () {
//   console.log(this.textContent);
// };
// elem.addEventListener("click", clickHandler);

//
// const clickHandler = function (e) {
//   console.log(e.currentTarget);
// };
// elem.addEventListener("click", clickHandler);
//
//
// const listItems = document.querySelectorAll("ul li");
// console.log(listItems);
// listItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     document.body.style.backgroundColor = item.textContent;
//   });
// });
// вариант получше
// const body = document.body;
// const listItems = document.querySelectorAll("ul li");
// const clickHandler = function (e) {
//   const color = e.currentTarget.textContent;
//   body.style.backgroundColor = color;
// };
// listItems.forEach((elem) => {
//   elem.addEventListener("click", clickHandler);
// });
// еще вариант
// const body = document.body;
// const listItems = document.querySelectorAll("ul li");
// const clickHandler = function (e) {
//   console.log("target", e.target);
//   console.log("currentTarget", e.currentTarget);
//   const color = e.target.dataset.textContent;
//   body.style.backgroundColor = color;
// };
// listItems.forEach((elem) => {
//   elem.addEventListener("click", clickHandler);
// });
//через dataset
// const body = document.body;
// const listItems = document.querySelectorAll("ul li");
// const clickHandler = function (e) {
//   console.log("target", e.target);
//   console.log("currentTarget", e.currentTarget);
//   const color = e.target.closest("[data-color]").dataset.color; //ищет данные
//   body.style.backgroundColor = color;
// };
// listItems.forEach((elem) => {
//   elem.addEventListener("click", clickHandler);
// });
//делегирование
// const body = document.body;
// const listElement = document.querySelector("ul");
// const clickHandler = function (e) {

//   const color = e.target.closest("[data-color]").dataset.color; //ищет данные
//   body.style.backgroundColor = color;
// };
// listElement.addEventListener("click", clickHandler);

//isli
// const body = document.body;
// const listElement = document.querySelector("ul");
// const clickHandler = function (e) {
//   const isLi = e.target.tagName === "LI";
//   if (!isLi) return;
//   const color = e.target.closest("[data-color]").dataset.color;
//   body.style.backgroundColor = color;
// };
// listElement.addEventListener("click", clickHandler);

//focus
// document.querySelectorAll("*").forEach((el) => {
//   el.addEventListener(
//     "click",
//     (e) => {
//       console.log(e.currentTarget.tagName);
//     },
//     { capture: true, once: true }
//   );
// });

// остановка погружения/всплытия
// document.querySelectorAll("*").forEach((el) => {
//   el.addEventListener("click", (e) => {
//     // e.preventDefault();
//     e.stopPropagation();
//     console.log(e.currentTarget.tagName);
//   });
// });

// const body = document.body;
// const li = document.querySelector("li");
// body.addEventListener("click", (e) => {
//   //   e.preventDefault();
//   console.log("body");
// });
// li.addEventListener("click", (e) => {
//   e.stopPropagation(); //не использовать
//   console.log("li");
// });
//работа с формой
// const form = document.querySelector("form");
// const inputNameElement = document.querySelector('input[name="name"]');
// inputNameElement.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   console.log(formData.get("name"));
// });

//показывает после загрузки страницы
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector("form");
//   console.log(form);
// });
// window.addEventListener("load", () => {
//   console.log("window loaded");
// });

// пока неясно ка делать

// throw new Error("custom error");

// window.addEventListener("error", (e) => {
//   console.log(e.message);
// });

//
// window.addEventListener("beforeunload", (e) => {
//  //для отправки статистики после закрытия страницы
// });
// для общения с сервером по запросу сервера
window.addEventListener("message", () => {
  console.log("jgf");
});
//
window.addEventListener("customEvent", () => {
  console.log("jgf");
});
window.dispatchEvent(new Event("customEvent"));
