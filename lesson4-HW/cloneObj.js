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
  if (Array.isArray(obj)) {
    const duplicateArr = [];
    for (let item of obj) {
      duplicateArr.push(duplicateObject(item));
    }
    return duplicateArr;
  } else if (typeof obj === "object") {
    const duplicateObj = {};
    for (let key in obj) {
      duplicateObj[key] = duplicateObject(obj[key]);
    }
    return duplicateObj;
  } else {
    return obj;
  }
};

const copiedObject = duplicateObject(complexObject);
console.log(copiedObject);

// tests

copiedObject.history[0].timestamp = "New Object";
console.log(copiedObject, complexObject);

console.log(complexObject == copiedObject);

console.log(complexObject.scores == copiedObject.scores);

console.log(complexObject.address == copiedObject.address);

console.log(complexObject.address.geo == copiedObject.address.geo);
