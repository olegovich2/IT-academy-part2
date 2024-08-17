/********Задача: Система управления банковскими счетами******
 * 
*******Описание*******
Создайте систему управления банковскими счетами с использованием классов. Каждый банковский счет должен иметь возможность пополнения, снятия средств и проверки баланса. Используйте try...catch для обработки ошибок, таких как попытка снятия средств, превышающих баланс счета, или попытка пополнения или снятия средств с недопустимой суммой.
Шаги
*********Создайте класс BankAccount:******
Класс должен иметь конструктор, который принимает начальный баланс.
Класс должен иметь методы deposit, withdraw и getBalance.
Используйте try...catch внутри методов для обработки ошибок.
********Создайте несколько объектов BankAccount и протестируйте методы.*******
********Добавьте метод для начисления процентов:*******
Метод startInterest(interval, rate) должен использовать setInterval, чтобы начислять проценты на баланс счета через заданные интервалы времени.
Метод stopInterest() должен останавливать начисление процентов.
*********Добавьте метод для выполнения отложенных транзакций:*******
Метод scheduleTransaction(type, amount, delay) должен использовать setTimeout для выполнения транзакции (пополнение или снятие) через заданное время.
*/

class BankAccount {
  constructor(name, amount) {
    this.name = name;
    this.amount = amount;
  }
  deposit(contribution) {
    try {
      if (isNaN(contribution) === true || contribution <= 0)
        throw new Error("Проверьте значение для снятия со счета");
    } catch (error) {
      console.log(error.message);
      contribution = 0;
      this.amount = this.amount + contribution;
    }
    this.amount = this.amount + contribution;
    this.getBalance();
  }
  withdraw(cashOut) {
    try {
      if (isNaN(cashOut) === true || cashOut <= 0)
        throw new Error("Проверьте значение для снятия со счета");
      try {
        if (this.amount < cashOut)
          throw new Error("Недостаточно средств на счете");
      } catch (error) {
        console.log(error.message);
        cashOut = 0;
        this.amount = this.amount - cashOut;
      }
    } catch (error) {
      console.log(error.message);
      cashOut = 0;
      this.amount = this.amount - cashOut;
    }
    this.amount = this.amount - cashOut;
    this.getBalance();
  }
  getBalance() {
    console.log(`На счете у ***${this.name}***: ${this.amount}`);
  }
  startInterest(rate, interval) {
    this.count = setInterval(() => {
      this.amount = Math.round((rate / 100) * this.amount + this.amount);
      console.log(`Начисление процентов ${this.name}: ${this.amount}`);
    }, interval);
    this.stopInterest();
  }
  stopInterest() {
    if (this.count) {
      setTimeout(() => {
        clearInterval(this.count);
        console.log(`Счет ${this.name} составляет ${this.amount}`);
      }, 1200);
    }
  }
  scheduleTransaction(type, amount, delay) {
    setTimeout(() => {
      if (type === "deposit") {
        this.deposit(amount);
      } else if (type === "withdraw") {
        this.withdraw(amount);
      } else {
        console.log("Неизвестный тип транзакции.");
      }
    }, delay);
  }
}

/*Создание аккаунтов */
const vladAccount = new BankAccount("vlad", 1000);
const leshaAccount = new BankAccount("lesha", 1000);
const iraAccount = new BankAccount("ira", 1000);
const lenaAccount = new BankAccount("lena", 1000);
const kostyaAccount = new BankAccount("kostya", 1000);

/*Аккаунты */
console.log("*****Список созданных аккаунтов******");
console.log(vladAccount, leshaAccount, lenaAccount, iraAccount, kostyaAccount);

/*Начисление суммы */
console.log("********Начисление допустимого значения******");
vladAccount.deposit(500);
console.log("*****Начисление недопустимого значения*****");
lenaAccount.deposit();
console.log("*****Начисление недопустимого значения*****");
leshaAccount.deposit("kjhgh");
console.log("*****Начисление недопустимого значения*****");
iraAccount.deposit(-800);

/*Списание суммы */
console.log("*****Списание допустимого значения*****");
kostyaAccount.withdraw(200);
console.log("*****Списание недопустимого значения*****");
iraAccount.withdraw();
console.log("*****Списание недопустимого значения*****");
leshaAccount.withdraw("sfdsfdsf");
console.log("*****Списание недопустимого значения*****");
lenaAccount.withdraw(1100);

/*Проверка баланса аккаунта*/
vladAccount.getBalance();

// BankAccount.prototype.startInterest = function (rate, interval) {
//   this.count = setInterval(() => {
//     this.amount = Math.round((rate / 100) * this.amount + this.amount);
//     console.log(`Начисление процентов ${this.name}: ${this.amount}`);
//   }, interval);
//   this.stopInterest();
// };

/*Начисление процентов */
vladAccount.startInterest(10, 100);

/*Пополнение или снятие со счета с задержкой*/
vladAccount.scheduleTransaction("deposit", 1000, 5000);
lenaAccount.scheduleTransaction("withdraw", 5000, 5000);
