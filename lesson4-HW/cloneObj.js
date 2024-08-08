//Глубокое копирование объекта

// Требования
// Функция должна принимать один аргумент — объект, который необходимо скопировать.
// Функция должна возвращать новый объект, который является полной копией исходного.
// Функция должна корректно обрабатывать вложенные объекты и массивы.
// Функция должна корректно обрабатывать примитивные типы данных (числа, строки, булевы значения, null, undefined).
// Функция не должна использовать внешние библиотеки для копирования объектов.

const complexObject = {
  name: "Test Object",
  age: 42,
  isActive: true,
  scores: [95, 88, 76, 100],
  address: {
    street: "123 Main St",
    city: "Anytown",
    zip: "12345",
    geo: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
  tags: ["test", "example", "sample"],
  metadata: {
    version: 1.0,
    contributors: [
      { name: "Alice", role: "Author" },
      { name: "Bob", role: "Reviewer" },
    ],
  },
  settings: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
    },
    preferences: {
      language: "en",
      timezone: "UTC",
    },
  },
  preferences: {
    colorScheme: "light",
    fontSize: 14,
    layout: {
      header: "fixed",
      footer: "static",
    },
  },
  history: [
    { event: "created", timestamp: "2023-10-01T10:00:00Z" },
    { event: "updated", timestamp: "2023-10-02T12:00:00Z" },
  ],
};
console.log(complexObject);
const duplicateObject = (obj) => {
  if (obj === null) return null;
  const duplicate = Object.assign({}, obj);
  Object.keys(duplicate).forEach(
    (key) =>
      (duplicate[key] =
        typeof obj[key] === "object" ? duplicateObject(obj[key]) : obj[key])
  );
  if (Array.isArray(obj)) {
    duplicate.length = obj.length;
    return Array.from(duplicate);
  }
  return duplicate;
};
const copiedObject = duplicateObject(complexObject);
console.log(copiedObject);

// tests(изменение в новом объекте не переносятся в оригинал)

copiedObject.history[0].timestamp = "New Object";
console.log(copiedObject, complexObject);
