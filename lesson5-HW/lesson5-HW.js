/* Задача: Система управления событиями
Описание
Создайте систему управления событиями, которая включает функции-конструкторы для событий и участников. Каждое событие будет иметь название, дату и список участников. Каждый участник будет иметь имя и email. Используйте функции-конструкторы для создания объектов событий и участников, а также методы для управления этими объектами.

Шаги

Создайте функцию-конструктор для участников:
Функция-конструктор Participant должна принимать имя и email участника и инициализировать их как свойства объекта.

Создайте функцию-конструктор для событий:
Функция-конструктор Event должна принимать название и дату события и инициализировать их как свойства объекта.
Инициализируйте пустой массив для хранения участников.

Добавьте методы на прототип Event:
Метод addParticipant(participant), который добавляет участника к событию(метод должен проверять что участник действительно является объектом созданным от конструктора Partisipants и только после этого добавлять).
Метод listParticipants(), который выводит список всех участников события.
Метод findParticipantByEmail(email), который находит участника по email.

Создайте несколько объектов событий и участников, и протестируйте методы.*/

function Participant(name, email) {
  this.name = name;
  this.email = email;
}

function Event(term, date) {
  this.term = term;
  this.date = date;
  this.members = [];
}

Event.prototype.addParticipant = function (participant) {
  if (participant instanceof Participant) {
    this.members.push(participant);
  } else {
    console.log(
      `Ошибка: ${participant.name} не является объектом типа Participant`
    );
  }
};

Event.prototype.listParticipants = function () {
  if (this.members.length > 0) {
    this.members.forEach(function (participant) {
      console.log(`${participant.name}: ${participant.email}`);
    });
  } else {
    console.log("Список участников пуст");
  }
};

Event.prototype.findParticipantByEmail = function (email) {
  if (this.members.length > 0) {
    const search = this.members.find(
      (participant) => participant.email === email
    );
    if (search) {
      console.log(
        `Найден участник с ${email} в данном событии: ${search.name}`
      );
    } else {
      console.log(`Участник с ${email} не найден`);
    }
  } else {
    console.log(
      `Участник с ${email} не найден, так как список участников пуст`
    );
  }
};
/*участники*/
const vlad = new Participant("Vlad", "11111@mail.ru");
const lesha = new Participant("Lesha", "2222@mail.ru");
const ira = new Participant("Ira", "3333@mail.ru");
const lena = new Participant("Lena", "555@mail.ru");
const kostya = new Participant("Kostya", "666@mail.ru");

/*Мероприятие*/
const birthday = new Event("BirthdayVictor", "6/08/2024");
const exam = new Event("Surgery", "30/08/2024");

/*Добавляем участников*/
birthday.addParticipant(vlad);
birthday.addParticipant(ira);
birthday.addParticipant(kostya);
exam.addParticipant(lesha);
exam.addParticipant(lena);
exam.addParticipant(kostya);

/*списки*/
console.log(`*****Список участников Birthday: *****`);
birthday.listParticipants();
console.log(`*****Список участников Exam: *****`);
exam.listParticipants();

/*Проверка: является ли объект объектом типа Participant*/
const enemy = {
  name: "Чужак",
  email: "777@protonmail.com",
};
exam.addParticipant(enemy);

/*Проверка: поиск участника события по email */
birthday.findParticipantByEmail("1111@mail.ru");
birthday.findParticipantByEmail("666@mail.ru");
exam.findParticipantByEmail("666@mail.ru");
exam.findParticipantByEmail("3333@mail.ru");
/*Если не будет ни одного участника проверка работает и выдает 
Участник с ..... не найден, так как список участников пуст*/
