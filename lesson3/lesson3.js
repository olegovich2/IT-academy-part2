// task1
// const obj = {};
// const obj2 = new Object({});

// const human = {
//   hand: true,
//   leftHand: false,
// };
// const handConst = "hand";
// console.log(human[handConst]);
// console.log(human);
// human.hand = false;
// console.log(human.hand);
// human.leftHand = true;
// console.log(human);
// delete human.hand;
// console.log(human);
// task2
// const human = {
//     hand: true,
//   leftHand: false,
// };
// const handConst = human.hand ? "hand" : "foot";
// console.log(handConst);
// task3
// const footConst = "foot";
// const human = {
//   hand: true,
//   leftHand: false,
//   [footConst]: undefined,
// };
// console.log(footConst in human);
// for (const key in human) {
//   console.log(key + " >>>> " + human[key]);
//   console.log(`${key} >>>>> ${human[key]}`);
// }
// task4
const library = [
  { author: "Vasya", year: 1920, title: "Hello world" },
  { author: "Lesha", year: 1920, title: "А всякая всячина" },
  { author: "Alex", year: 1920, title: "НРЛ, и методы воздействия" },
  { author: "Igor", year: 1920, title: "Как правильно охотиться" },
  { author: "Ivan", year: 1920, title: "Afrodita" },
  { author: "Andrey", year: 1920, title: "Vikings" },
];
const getBooksByTitle = (title) => {
  return library.filter((library) => library.title.includes(title));
};
console.log(getBooksByTitle("A"));
const getBooksByAuthor = (author) => {
  return library.filter((library) => library.author.includes(author));
};
console.log(getBooksByAuthor("I"));
const removeBookByTitle = (title) => {
  let a = library.findIndex(
    (library) => library.title.toLowerCase() === title.toLowerCase()
  );
  console.log(a);
  if (a !== -1) {
    library.splice(a, 1);
  }
  return library;
};
console.log(removeBookByTitle("hello world"));

const editBookByTitle = (title, newOptions) => {
  let index = library.findIndex((library) => library.title === title);
  if (index !== -1) {
    // library[index] = { ...library[index], ...newOptions };
    library.splice(index, 1, { ...library[index], ...newOptions });
  }

  return library;
};
console.log(editBookByTitle("Vikings", { year: 2004, title: "test" }));
// removeBookByAuthor("");
// task5
// const a = { a: "a", b: "b" };
// const b = Object.assign(a);
// const b = { ...a, a: "c" };
// console.log(a, b);
