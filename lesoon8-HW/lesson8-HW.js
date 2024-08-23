/*
Создайте HTML парсер
Используйте любой готовый сайт(например https://www.it-academy.by/ необязательно брать целый сайт, можно фрагмент) и скопируйте его html в свой файл с которым вы работает (для удобства можете скрыть содержимое всего контента добавив для div.conten display: none)

Задачи
Внутри своего скрипта создайте парсер этого html который сделает полню копию вашего html в объектное представление с атрибутами и дочерними элементами 
Пройдитесь по этому объекту и выведите данные в HTML в виде списка иерархичного списка
 */

/*Функция, которая преобразует DOM-дерево в объект */
function parseDOM(element) {
  let objectFromDOM = {
    tag: element.tagName.toLowerCase(),
    attributes: {},
    children: [],
  };
  /*Находим все аттрибуты и записываем в объект */
  for (let attribute of element.attributes) {
    objectFromDOM.attributes[attribute.name] = attribute.value;
  }
  /*Находим все дочерние элементы и добавляем при помощи рекурсии */
  for (let child of element.children) {
    objectFromDOM.children.push(parseDOM(child));
  }

  return objectFromDOM;
}
const source = document.body.parentElement;
const objectHTML = parseDOM(source);

/*Функция преобразует объект в список */
function catalogFrom(object) {
  const catalog = document.createElement("ul");
  const tag = document.createElement("li");
  /*Добавляем тэги в список */
  tag.textContent = object.tag;
  const attributes = document.createElement("ul");
  /*Добавляем аттрибуты и их значения в список */
  for (let key in object.attributes) {
    const attributeValue = document.createElement("li");
    attributeValue.textContent = `${key}: ${object.attributes[key]}`;
    attributes.appendChild(attributeValue);
  }

  tag.appendChild(attributes);
  catalog.appendChild(tag);
  /*Находим дочерние элементы и запускаем рекурсию */
  for (let child of object.children) {
    catalog.appendChild(catalogFrom(child));
  }

  return catalog;
}
/*Вывод результата в конец страницы */
const result = document.querySelector(".result");
const catalog = catalogFrom(objectHTML);
result.appendChild(catalog);
