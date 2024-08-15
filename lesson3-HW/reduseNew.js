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

const makePurchaseStat = (purchases) => {
  return purchases.reduce(
    (acc, purchase) => {
      acc.total += purchase.amount;

      if (!acc.categories[purchase.category]) {
        acc.categories[purchase.category] = 0;
      }
      acc.categories[purchase.category] += purchase.amount;

      if (!acc.months[purchase.date]) {
        acc.months[purchase.date] = 0;
      }
      acc.months[purchase.date] += purchase.amount;

      return acc;
    },
    {
      total: 0,
      categories: {},
      months: {},
    }
  );
};

/***************** test *********************/

const result = makePurchaseStat(purchases);
console.log(result);
