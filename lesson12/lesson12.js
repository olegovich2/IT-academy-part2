// const url = new URL("posts/", "https://jsonplaceholder.com");
// url.searchParams.append("title", "hello");
// console.log(url);

// такое есть

// const xhr = new XMLHttpRequest();
// // console.log(xhr);
// xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
// xhr.send();
// xhr.onload = () => {
//   console.log(xhr.statusText);
//   if (xhr.status === 200) {
//     console.log(xhr.responce);
//   }
// };
// xhr.onprogress = (e) => {
//   console.log(e.loaded);
// };

// fetch("https://jsonplaceholder.typicode.com/todos/1", {
//   method: "GET",
// })
//   .then((res) => {
//     console.log(res);

//     if (res.ok) return res.text();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });
//
// const formData = new FormData();
// formData.append("name", "Aleh");
// console.log(formData.get("name"));
//
// blob, arrayboofer - бинарные данные(0,1)

// метод abort

// const controller = new AbortController();
// console.log(controller);
// fetch("https://jsonplaceholder.typicode.com/todos/1", {
//   method: "GET",
//   signal: controller.signal,
// })
//   .then((res) => {
//     controller.abort();
//     console.log(res);

//     if (res.ok) return res.text();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// const controller = new AbortController();
// new Promise((resolve, reject) => {
//   controller.signal.addEventListener("abort", reject);
//   setTimeout(resolve, 3000);
// })
//   .then(() => {
//     console.log("responce");
//   })
//   .catch(() => {
//     console.log("reject");
//   });
// controller.abort();

// кроссдоменные запросы и простые

fetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => {
    console.log(res);
    if (res.ok) return res.text();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });
