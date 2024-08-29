//асинхронность
// const defaultImageSrc =
//   "https://pythonru.com/wp-content/uploads/2018/12/random-module-icon.png";
// document.addEventListener("DOMContentLoaded", () => {
//   const img = document.querySelector("img");
//   console.log(img);
//   img.onerror = (e) => {
//     e.target.src = defaultImageSrc;
//   };
//   img.onload = () => {
//     console.log(this, "loaded");
//   };
// });
// promise обещание

// let money;

// setTimeout(() => {
//   money = 1000;
// }, 4000);

// const interval = setInterval(() => {
//   console.log(money);
//   if (money) {
//     clearInterval(interval);
//   }
// }, 1000);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1000);
//   }, 4000);
//   throw new Error("error");
//     reject("no money");
// });

// в академических целях
// promise.then(
//   (money) => {
//     console.log(money);
//   },
//   (e) => {
//     console.log(e);
//   }
// );

// на практике
// promise
//   .then((money) => {
//     console.log("then", money);
//   })
//   .catch((e) => {
//     console.log("catch");
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// задание(функция симулятор загрузки данных  с сервера, 50/50 возвращать загружено илинет)
// const getData = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (parseInt(Math.random() * 10) < 5) resolve("data");
//       reject("fail");
//     }, parseInt(Math.random() * 1000));
//   });
// };
// const getData = () => {
//   return Promise.reject("success"); //короткая запись
// };
// getData()
//   .catch((error) => {
//     if (error instanceof NotFoundError) getData();
//     // console.log("reject", error);
//     else throw new Error(error);
//   })
//   .then((data) => {
//     console.log("resolve", data);
//     return data;
//   })
//   .then((data) => {
//     console.log("resolve", data);
//     return data;
//   })
//   .then((data) => {
//     console.log("resolve", data);
//   })
//   .then((data) => {
//     console.log("resolve", data);
//   })
//   .catch((error) => {
//     console.log("reject", error);
//   });

// promise api

// const promise = Promise.all([
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve("promise 1"), 1000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve("promise 2"), 500)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve("promise 3"), 2000)
//   ),
//     new Promise((resolve, reject) => setTimeout(() => reject("promise 4"), 3000)),
// ]); //принимает массив промисов
// console.log(promise);
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// const promise = Promise.allSettled([
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve("promise 1"), 1000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve("promise 2"), 500)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve("promise 3"), 2000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => reject("promise 4"), 3000)),
// ]);
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// вернет самый быстрый результат
// const promise = Promise.race([
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve("promise 1"), 1000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => resolve("promise 2"), 500)),
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve("promise 3"), 2000)
//   ),
//   new Promise((resolve, reject) => setTimeout(() => reject("promise 4"), 3000)),
// ]);
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// const promise = Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => reject("promise 1"), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject("promise 2"), 500)),
//   new Promise((resolve, reject) => setTimeout(() => reject("promise 3"), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => reject("promise 4"), 3000)),
// ]);
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
//
/*Асинхронная функция */
// const getData = () => Promise.reject("test"); //короткая запись

// window.onunhandledrejection = () => {
//   console.log("onunhandledrejection");
// };

// const asyncGetData = async () => {
//   try {
//     const data = await getData();
//     console.log(data);
//   } catch (error) {
//     console.log("catch", error);
//   }
// };
// asyncGetData();
// ловец ошибок
// const getData = () => Promise.reject("test");
// window.onunhandledrejection = () => {
//   console.log("onunhandledrejection");
// };
// const asyncGetData = async () => {
//   const data = await getData();
//   console.log(data);
// };
// asyncGetData();
