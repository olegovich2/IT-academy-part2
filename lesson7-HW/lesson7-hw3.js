/* 
Задача 3: Управление библиотекой книг
Описание
У вас есть массив объектов, представляющих книги в библиотеке. Каждый объект содержит информацию о названии книги, авторе, жанре и годе издания. Ваша задача — написать функции для выполнения следующих операций:
Найти все книги определенного автора.
Найти все книги, изданные после определенного года.
Создать список всех жанров без повторений.
*/
const library = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    year: 1960,
  },
  { title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949 },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    genre: "Adventure",
    year: 1851,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    year: 1925,
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    year: 1932,
  },
];
const getBooksByAuthor = (author) => {
  return library.filter((library) => library.author.includes(author));
};
function findBooksByYear(library, year) {
  return library.filter((library) => library.year >= year);
}
function getGenre(library) {
  const uniqueGenre = new Set();
  library.forEach((library) => uniqueGenre.add(library.genre));
  return Array.from(uniqueGenre);
}

console.log(
  "задача3",
  "Поиск книги по автору",
  getBooksByAuthor("Aldous Huxley")
);
console.log("задача3", "Поиск книги по году", findBooksByYear(library, 1930));
console.log("задача3", "Уникальные жанры", getGenre(library));
