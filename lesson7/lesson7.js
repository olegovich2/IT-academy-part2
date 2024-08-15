// map
// const obj = {
//   fieldOne: "One",
//   fieldTwo: "Two",
// };
// Object.keys(obj).forEach((key) => console.log(typeof key));

// const testMap = new Map();
// testMap.set(1, "1");
// testMap.set(false, "true");
// testMap.entries().forEach(([key, value]) => console.log(typeof key));
// console.log(testMap);

// делаем Map

// const obj = {
//   fieldOne: "One",
//   fieldTwo: "Two",
// };
// let makeMap = (obj) => {
//   const res = new Map();
//   Object.entries(obj).forEach(([key, value]) => {
//     res.set(key, value);
//   });
//   return res;
// };
// const map = makeMap(obj);
// console.log(map.get("fieldOne"));

// set - массив который содержит уникальные значения

// const testSet = new Set(["one", "two"]);

// testSet.add("one");
// testSet.add("three");
// testSet.add({ fieldOne: "One" });
// testSet.add({ fieldOne: "One" });
// testSet.forEach((elem) => console.log(elem));

// weakMap -ключом может быть только объект

// let obj = { fieldOne: "One" };

// const weakMap = new WeakMap();
// weakMap.set(obj, "obj");
// obj = null;
// console.log(weakMap.get(obj));

//
// Array.prototype.squared = function () {
//   return this.map((num) => num * num);
// };
// const arr = [2, 4, 8, 16];
// console.log(arr);
// console.log(arr.squared());

// call, apply, bind
// function callHello(phrase) {
//   console.log(`${phrase} ${this.name}`);
// }
// const vasya = {
//   name: "Vasya",
//   age: 29,
// };

// vasya.callHello = callHello;
// vasya.callHello();

// callHello.call(vasya);
// console.log(callHello.prototype);
// callHello.apply(vasya, ["привет"]);
// const newgreet = callHello.bind(vasya, ["привет"]);
// newgreet();

//
