// создание объекта и работа с прототипом
// function Animal(name, age, animalType) {
//   this.name = name;
//   this.age = age;
//   this.animalType = animalType;
// }
// Animal.prototype = {
//   sayHello: function () {
//     console.log(`Hello, my name is ${this.name} and I'm ${this.animalType}`);
//   },
//   constructor: Animal,
// };
// const dog = new Animal("Archi", 5, "dog");
// const cat = new Animal("Murka", 2, "cat");
// console.log(dog);
// dog.sayHello();

//разбираем наследование

// const animal = {
//   type: "animal",
//   jump() {
//     console.log("jumping");
//   },
// };

// const cat = {
//   animalType: "cat",
//   hunt() {
//     console.log("hunting");
//   },
//   jump() {
//     console.log("cat jumping");
//   },
//   __proto__: animal,
// };

// const murkaCat = {
//   name: "Murka",
//   __proto__: cat,
// };
// console.log(murkaCat);
// murkaCat.hunt();
// murkaCat.jump();
// console.log(murkaCat.toString());

// как не правильно

// const Animal = (name, age) => {
//   console.log(this);

//   this.name = name;
//   this.age = age;
// };
// const dog = Animal("Archi", 3);
// console.log(dog);

//

// const Animal = function (name, age) {
//   this.name = name;
//   this.age = age;
// };
// Animal.prototype.sayHello = function () {
//   console.log(`Hello, my name is ${this.name}`);
// };
// const dog = new Animal("Archi", 3);
// console.log(dog);
// dog.sayHello();

// вывод в консоль с задержкой

// const Animal = function (name, age) {
//   this.name = name;
//   this.age = age;
// };
// Animal.prototype.sayHello = function () {
//   setTimeout(() => console.log(`Hello, my name is ${this.name}`), 2000);
// };
// аналог вывод в консоль без паузы путем анонимной самовызывающейся функции
// Animal.prototype.sayHello = function () {
//   (() => console.log(`Hello, my name is ${this.name}`))();
// };
// const dog = new Animal("Archi", 3);
// console.log(dog);
// dog.sayHello();

//

// const Animal = function (name, age) {
//   this.name = name;
//   this.age = age;
// };
// Animal.prototype = {
//   sayHello: function () {
//     console.log(`Hello, my name is ${this.name}`);
//     constructor: Animal;
//   },
// };

// const dog = new Animal("Archi", 3);
// console.log(dog);
// dog.sayHello();

// Animal.prototype = {
//   sayGoodBye: function () {
//     console.log(`Hello, my name is ${this.name}`);
//     constructor: Animal;
//   },
// };
// const cat = new Animal("Murka", 10);
// console.log(cat);

// cat.sayGoodBye();

//

function Car(make, model, color) {
  this.make = make;
  this.model = model;
  this.color = color;
}
Car.prototype.redecorate = function (newOption) {
  for (const [key, value] of Object.entries(newOption)) {
    this[key] = value;
  }
};
const fordF150 = new Car("Ford", "F-150", "red");
const MazdaCX5 = new Car("Mazda", "CX5", "blue");
console.log(fordF150);
fordF150.redecorate({
  color: "green",
  optics: "led",
});
console.log(fordF150);
