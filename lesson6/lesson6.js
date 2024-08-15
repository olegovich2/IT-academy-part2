// классы
// function redecorate(color) {
//   this.color = color;
// }

// const Vehicle = function (make, model) {
//   this.made = make;
//   this.model = model;
// };

// Vehicle.prototype.redecorate = redecorate;

// class VehicleClass {
//   constructor(make, model) {
//     this.made = make;
//     this.model = model;
//   }

//   redecorate = redecorate;
// }

// const fordF150 = new Vehicle("ford", "F-150");
// const fordF150Class = new VehicleClass("ford", "F-150");
// fordF150Class.redecorate("green");
// console.log(fordF150);
// console.log(fordF150Class);

// пример класса

// class Auto {
//   constructor(make, model) {
//     this._wheels = 4;
//     this.made = make;
//     this.model = model;
//   }
// }
// class VehicleClass extends Auto {
//   constructor(make, model, color) {
//     super(make, model);
//     this._wheels = 3;
//     this.color = color;
//   }
//   static isRed(car) {
//     return car.color === "red";
//   }
// }
// const fordF150Class = new VehicleClass("ford", "F-150", "blue");
// console.log(fordF150Class);
// console.log(Object.keys(fordF150Class));
// console.log(VehicleClass.isRed(fordF150Class));

/* пример из прошлого занятия переделать на классах
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
*/
// решение

// class Auto {
//   constructor(make, model, color) {
//     this.made = make;
//     this.model = model;
//     this.color = color;
//   }
//   redecorate(color) {
//     this.color = color;
//   }
// }

// const fordF150 = new Auto("Ford", "F-150", "red");
// console.log(fordF150);
// fordF150.redecorate("white");
// console.log(fordF150);

//# - запрещает изменять данные поля

// class Vehicle {
//   #start() {
//     console.log("engine is started");
//   }
//   #wheels = 0;
//   constructor(make, model, color) {
//     this.#wheels = 4;
//     this.#start();
//     this.made = make;
//     this.model = model;
//     this.color = color;
//   }
//   static isRed(car) {
//     return car.color === "red";
//   }
// }
// const fordF150Class = new Vehicle("ford", "F-150", "blue");
// console.log(fordF150Class);

// проверка на цвет

// class Auto {
//   constructor(make, model) {
//     this.isAuto = true;
//     this.wheels = 4;
//     this.made = make;
//     this.model = model;
//   }
//   isAuto() {
//     return this.isAuto;
//   }
// }
// class VehicleClass extends Auto {
//   constructor(make, model, color) {
//     super(make, model);
//     this.color = color;
//   }
//   isRedAuto() {
//     return super.isAuto() ? this.color === "red" : false;
//   }
// }
// const fordF150Class = new VehicleClass("ford", "F-150", "black");
// console.log(fordF150Class.isRedAuto());

//

// class PowerArray extends Array {
//   constructor(...params) {
//     super(params);
//     this.powerLength = params.length;
//   }
//   isEmpty() {
//     return !this.length; //если равно нулю то напишет false
//   }
// }
/* Object.assign(target, source)*/
// Object.assign(PowerArray.prototype, {
//   isNotEmpty() {
//     return !!this.length;
//   },
// });
// const arr = new PowerArray(1, 2, 3, 4, 5);
// console.log(arr);

// console.log(arr.isEmpty());
// console.log(arr.isNotEmpty());
// console.log(arr instanceof Array);
// console.log(arr instanceof PowerArray);

// *******Обработка ошибок

// const obj = {};
// const callSayHello = (param) => param.sayHello();

// const callSayHello = (param) => param.sayHello && param.sayHello();
// const callSayHello = (param) => param?.sayHello?.name?.surname;

// *************
// try {
//   callSayHello({});
// } catch {
//   console.log("some");
// } finally {
//   console.log("finally");
// }
// **************
// try {
//   throw new Error("test error");
// } catch (e) {
//   console.log(e.message);
// }
// **************
// try {
//   try {
//     throw new Error("outer error");
//   } catch (e) {
//     if (e.message.includes("inner")) {
//       console.log("inner");
//       console.log(e.message);
//     } else {
//       throw e;
//     }
//   }
// } catch (e) {
//   console.log("outer");
//   console.log(e.message);
// }
// *********
// class CustomError extends Error {
//   constructor(message) {
//     super(message);
//     this.customError = true;
//   }
//   logger() {
//     console.log("im custom error");
//   }
// }
// try {
//   try {
//     throw new CustomError("outer error");
//   } catch (e) {
//     if (e instanceof CustomError) {
//       e.logger();
//     } else {
//       throw e;
//     }
//   }
// } catch (e) {
//   console.log("outer");
//   console.log(e.message);
// }

// ****Асинхронный код
// const message = "timer1";
// console.time(message);
// setTimeout(() => {
//   console.timeEnd(message);
// }, 0);
// ********
// const counter = 1;
// const id = setInterval(() => {
//   counter += 1;
//   console.log(counter);

//   if (counter === 10) clearInterval(id);
// }, 100);
// console.log(id);

// ******
let counter = 0;
function recursiveTimeout() {
  console.log(counter);
  counter += 1;
  let id = setTimeout(recursiveTimeout, 100);
  if (counter >= 10) clearTimeout(id);
}
recursiveTimeout();
