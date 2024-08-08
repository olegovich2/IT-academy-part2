// возведение в степень for

// const pow = (x, y) => {
//   let res = 1;
//   for (let i = 0; i < y; i++) {
//     res *= x;
//   }
//   return res;
// };
// console.log(pow(2, 2));
// console.log(pow(2, 3));

// возведение в степень рекурсия

// const pow = (x, y) => {
//   if (y === 1) {
//     return x;
//   } else {
//     return x * pow(x, y - 1);
//   }
// };
// console.log(pow(2, 2));
// console.log(pow(4, 4));

// объект
// "use strict";
// console.log(Math.PI);
// Math.PI = 2.17;
// console.log(Math.PI);

// read only >>> дескрипторы

// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
// delete Math.PI;
// console.log(Math.PI);

// примеры по изменению конфигураций объекта
// "use strict";
// const obj = {
//   fieldOne: "prop1",
//   fieldTwo: "prop2",
//   fieldThree: "prop3",
// };

// Object.defineProperty(obj, "secretField", {
//   value: "secretValue",
//   enumerable: true,
//   writable: false,
//   configurable: true,
// });
// console.log(Object.getOwnPropertyDescriptor(obj, "secretField"));

// const changeObj = (object, fieldName) => {
//   Object.defineProperty(object, fieldName, {
//     writable: true,
//   });
//   object[fieldName] = "new value";
//   Object.defineProperty(object, fieldName, {
//     writable: false,
//   });
// };
// changeObj(obj, "secretField");
// for (const field in obj) {
//   console.log(obj[field]);
// }

// geter и seter

// const person = {
//   name: "Ivan",
//   surname: "Ivanov",
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
//   get fulName() {
//     return `${this.name} ${this.surname}`;
//   },
//   set fulName(newValue) {
//     const [name, surname] = newValue.split(" ");
// if (name && surname) {
//   this.name = name;
//   this.surname = surname;
// } else {
//   throw new Error("Invalid value");
// }
//     if (name.length > 3 && surname.length > 3) {
//       this.name = name;
//       this.surname = surname;
//     }
//   },
// };
// person.fulName = "test test";
// person.sayHello();
// console.log(person);
// console.log(person.fulName);

// деструктуризация

// const person = {
//   name: "Ivan",
//   surname: "Ivanov",
// };
// const { fulName: newName = "Ivan" } = person; //const newName = person.name;
// console.log(newName);

// конструктор

function PeopleConstructor(name, surname) {
  if (!new.target) {
    return new PeopleConstructor(name, surname);
  }
  //   console.log(new.target);

  this.name = name;
  this.surName = surname;
  this.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}
const ivan = new PeopleConstructor("Ivan", "Ivanov");
const kostik = PeopleConstructor("kostik", "neIvanov");
// console.log(ivan);
// console.log(kostik);
ivan.sayHello();
kostik.sayHello();
