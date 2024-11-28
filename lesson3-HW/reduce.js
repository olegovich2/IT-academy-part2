const purchases = [
  { date: "Feb", category: "Food", amount: 50 },
  { date: "Feb", category: "Clothing", amount: 100 },
  { date: "Feb", category: "Entertainment", amount: 75 },
  { date: "Mar", category: "Food", amount: 25 },
  { date: "Mar", category: "Clothing", amount: 200 },
  { date: "Mar", category: "Entertainment", amount: 50 },
  { date: "Mar", category: "Food", amount: 100 },
  { date: "Mar", category: "Clothing", amount: 150 },
  { date: "Apr", category: "Entertainment", amount: 100 },
  { date: "Apr", category: "Food", amount: 100 },
  { date: "Apr", category: "Clothing", amount: 100 },
  { date: "Apr", category: "Clothing", amount: 100 },
  { date: "Jun", category: "Food", amount: 100 },
  { date: "Jun", category: "Entertainment", amount: 100 },
  { date: "Jun", category: "Food", amount: 100 },
  { date: "Jun", category: "Entertainment", amount: 100 },
  { date: "Jul", category: "Clothing", amount: 100 },
  { date: "Jul", category: "Entertainment", amount: 100 },
  { date: "Jul", category: "Food", amount: 100 },
  { date: "Jul", category: "Clothing", amount: 100 },
];
// объект с результатами преобразований
const ExampleResult = {};
// объект для платежей по категориям расходов
const categories = {};
// объект для платежей по месяцам
const month = {};
// массив сформированных месяцев
const arrayMonth = [];
for (const key in purchases) {
  arrayMonth.push(purchases[key].date);
}
const newSet = new Set(arrayMonth);
const uniqMonth = Array.from(newSet); //массив с уникальными месяцами => платежи по месяцам
console.log(uniqMonth);
// общие расходы
const makePurchaseAmount = purchases.reduce(function (total, purchases) {
  if (purchases.amount) {
    total += Number(purchases.amount);
  }
  return total;
}, 0);
ExampleResult.total = makePurchaseAmount;
console.log(ExampleResult);
// расходы на еду с внесением в объект
const food = purchases.reduce(function (food, purchases) {
  if (purchases.category === "Food") {
    food += Number(purchases.amount);
  }
  return (categories.Food = food);
}, 0);
// расходы на одежду с внесением в объект
const clothing = purchases.reduce(function (clothing, purchases) {
  if (purchases.category === "Clothing") {
    clothing += Number(purchases.amount);
  }
  return (categories.Clothing = clothing);
}, 0);
// расходы на развлечения с внесением в объект
const entertainment = purchases.reduce(function (entertainment, purchases) {
  if (purchases.category === "Entertainment") {
    entertainment += Number(purchases.amount);
  }
  return (categories.Entertainment = entertainment);
}, 0);
// вложение объекта в объект
ExampleResult.categories = categories;
// платежи по месяцам <= не reduce
function amount(array, object, result) {
  for (let i = 0; i < array.length; i++) {
    for (const key in object) {
      if (array[i] === object[key].date) {
        result += Number(object[key].amount);
      } else {
        month[array[i]] = result;
      }
      if (i === array.length - 1) {
        month[array[i]] = result;
      }
    }
    result = 0;
  }
  return month;
}
// вложение объекта в объект
ExampleResult.month = amount(uniqMonth, purchases, 0);
console.log(ExampleResult);
