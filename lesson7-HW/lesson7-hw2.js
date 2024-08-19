/*
Задача 2: Управление инвентарем магазина
Описание
У вас есть массив объектов, представляющих товары в магазине. Каждый объект содержит информацию о названии товара, его категории, цене и количестве на складе. Ваша задача — написать функции для выполнения следующих операций:
Подсчитать общую стоимость всех товаров в магазине.
Найти товар с наибольшим количеством на складе.
Создать список товаров определенной категории.
 */
const inventory = [
  { name: "Laptop", category: "Electronics", price: 1000, quantity: 5 },
  { name: "Phone", category: "Electronics", price: 500, quantity: 10 },
  { name: "Shirt", category: "Clothing", price: 30, quantity: 20 },
  { name: "Pants", category: "Clothing", price: 40, quantity: 15 },
  { name: "Shoes", category: "Footwear", price: 60, quantity: 8 },
];
const totalAmount = (inventory) => {
  return inventory.reduce(
    (acc, inventory) => {
      let total = 0;
      total = inventory.price * inventory.quantity;
      acc.total += total;
      if (
        acc.maxQuantity.quantity < inventory.quantity ||
        acc.maxQuantity.quantity === undefined
      ) {
        acc.maxQuantity.name = inventory.name;
        acc.maxQuantity.quantity = inventory.quantity;
      }
      if (inventory.category === "Clothing") {
        acc.productList[inventory.name] = "";
        acc.productList[inventory.name] += inventory.quantity;
      }
      return acc;
    },
    {
      total: 0,
      maxQuantity: {},
      productList: {},
    }
  );
};
const result1 = totalAmount(inventory);
console.log("задача2", result1);
