/*
Задача 1: Анализ данных студентов
Описание
У вас есть массив объектов, представляющих студентов. Каждый объект содержит информацию о имени студента, его возрасте и списке оценок. Ваша задача — написать функции для выполнения следующих операций:
Подсчитать средний возраст студентов.
Найти студента с наивысшей средней оценкой.
Создать список студентов, у которых средняя оценка выше определенного порога.
 */
const students = [
  { name: "Alice", age: 20, grades: [85, 90, 78] },
  { name: "Bob", age: 22, grades: [70, 88, 95] },
  { name: "Charlie", age: 23, grades: [92, 80, 85] },
  { name: "David", age: 21, grades: [75, 85, 89] },
  { name: "Eve", age: 20, grades: [90, 92, 88] },
];

const middleMarkAndAge = (students) => {
  return students.reduce(
    (acc, student) => {
      let total = 0;
      total += student.age;
      acc.middleAge += total / students.length;
      for (const element of student.grades) {
        mark =
          student.grades.reduce((all, mark) => all + mark) /
          student.grades.length;
        if (
          acc.maxMiddleMark.mark < mark ||
          acc.maxMiddleMark.mark === undefined
        ) {
          acc.maxMiddleMark.name = student.name;
          acc.maxMiddleMark.mark = mark;
        }
        if (mark >= 85) {
          acc.listStudentsPassRate[student.name] = mark;
        }
      }

      return acc;
    },
    {
      middleAge: 0,
      maxMiddleMark: {},
      listStudentsPassRate: {},
    }
  );
};

const result = middleMarkAndAge(students);
console.log("задача1", result);
