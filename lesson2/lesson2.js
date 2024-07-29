// const base = 5;
// тернарный оператор
// const result = base < 4 ? 5 : 4;
// дурной тон
// const result = base < 4 ? true : false;
// лучше вот так
// const result = base < 4;
// console.log(result);
// логический оператор
// const base = false;
// const result = base && 4;
// console.log(result);
// логический оператор
// const base = false;
// const result = base || 4 || 2 || false;
// console.log(result);
// is else
// const base = 6;
// if (base < 2) {
//   console.log("less then 2");
// } else if (base < 3) {
//   console.log("less then 3");
// } else if (base < 4) {
//   console.log("less then 4");
// } else {
//   console.log("biggest");
// }
// switch case
// const base = 10;
// switch (base) {
//   case 6:
//     console.log(6);
//     break;
//   case 7:
//     console.log(7);
//     break;
// /    // для оптимизации кода
//   case 10:
//   case 11:
//   default:
//     console.log("not matched");
// }
// while, если ложное утверждение не выполнится ни одной итерации
// let base = 5;
// while (0) {
//   console.log(base);
//   base -= 1;
// }
// dowhile
// let base = 0;
// do {
//   console.log(base);
// } while (base);
// for
// for (let base = 0; base < 5; base++) {
//   console.log(base);
// }
// function
// const param = 5;
// function testFunction(param) {
//   const multiBase = param * 2;
//   console.log(multiBase);
// }
// for (let base = 0; base < 5; base++) {
//   testFunction(base);
// }
// console.log("------------------------");
// for (let base = 5; base; base--) {
//   testFunction(base);
// }
// f2
// const param = 5;
// function testFunction() {
//   const multiBase = param * 2;
//   console.log(multiBase);
// }
// testFunction();
// f3 параметры по умолчанию
// function testFunction(param = 10) {
//   const multiBase = param * 2;
//   console.log(multiBase);
// }
// for (let base = 0; base < 5; base++) {
//   testFunction();
// }
// console.log("------------------------");
// for (let base = 5; base; base--) {
//   testFunction(base);
// }
// f4 куча параметров
// function testFunction(param, ...rest) {
//   console.log(rest);
//   const multiBase = param * 2;
//   console.log(multiBase);
// }
// testFunction(1, 2, 3);
// f5
// var testFunction = function () {
//   console.log("vvv");
// };
// testFunction();
// const testFunction = () => {
//   console.log("vvv");
// };
// testFunction();
// const calc = (a, b) => {
//     const sum = a+b;
//   return sum;
// };
// const result = calc(2, 4);
// console.log(result);
// const calc = (a, b) => a + b;
// const result = calc(2, 4);
// console.log(result);
// задача
// const calculator = (a, b, operator) => {
//   switch (operator) {
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//     case "+":
//     default:
//       return a + b;
//   }
// };
// console.log(calculator(2, 4, "+"));
// console.log(calculator(2, 4, "-"));
// console.log(calculator(2, 8, "*"));
// строки
// const string = "string";
// const string2 = new String("string2");
// console.log(string);
// console.log(string2);
// массив
// const leninSt = [47, 32, 15, 64];
// const leninStr = ["home 47", "home 32", "office 22"];
// console.log(leninStr.length);
// console.log((leninStr[0] = "home 46"));
// console.log(leninStr.length);
// console.log(leninStr);
// leninStr.push("home11");
// console.log(leninStr);
// leninStr.pop();
// console.log(leninStr);
// leninStr.unshift("office 13");
// console.log(leninStr);
// массив + цикл
// const leninStr = ["home 47", "home 32", "office 22"];
// for (let i = 0; i < leninStr.length; i++) {
//   console.log(leninStr[i]);
// }
// упражнение
// const array = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }
// console.log(sum);
// упражнение вариант 2
// const array = [1, 2, 3, 4, 5];
// let sum = 0;
// array.forEach((value) => {
//   sum += value;
// });
// console.log(sum);
// вариант 3
// const array = [1, 2, 3, 4, 5];
// let sum = array.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);
// console.log(sum);
