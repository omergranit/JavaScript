// תרגיל 10
const categories = ["Electronics", "Fashion", "Books", "Home"];

console.log(categories[0]);
console.log(categories[categories.length - 1]);

console.log(categories.includes("Books"));

console.log(categories.indexOf("Fashion"));
console.log(categories.indexOf("Sports")); // מחזיר -1 כי לא קיים

categories.push("Sports");
const removedCategory = categories.pop();
console.log(removedCategory);

categories.splice(1, 1);
console.log(categories);

// קריאת קוד: ["new", "sale"], "popular", 2
// תיקון באג: console.log(categories[categories.length - 1]);
// משנות את המערך: push, pop, splice


// תרגיל 11
const stockAmounts = [4, 0, 7, 3, 0];

function calculateTotalStock(arr) {
  let sum = 0;
  for (const amount of arr) {
    sum += amount;
  }
  return sum;
}

function countOutOfStock(arr) {
  let count = 0;
  for (const amount of arr) {
    if (amount === 0) {
      count++;
    }
  }
  return count;
}

const totalStock = calculateTotalStock(stockAmounts);
const outOfStock = countOutOfStock(stockAmounts);
console.log(totalStock);
console.log(outOfStock);

function calculateTotalStock2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(calculateTotalStock2(stockAmounts));
// ה - index צריך כשצריך לדעת את המיקום. for...of יותר פשוט כשצריך רק את הערכים


// תרגיל 12
const user = {
  id: 1,
  firstName: "Dana",
  lastName: "Levi",
  age: 17
};

console.log(user.firstName);
console.log(user.age);

user.age = 18;
user.email = "dana@gmail.com";

console.log(`${user.firstName} ${user.lastName} is ${user.age} years old, email: ${user.email}`);

// תיקון באג: אין property בשם name
console.log(user.firstName);


// תרגיל 13
const post = {
  id: 101,
  content: "JavaScript practice day",
  author: {
    id: 7,
    name: "Noa",
    username: "@noa_dev"
  },
  comments: [
    { id: 1, user: "@amit", text: "Good luck!" },
    { id: 2, user: "@lior", text: "Nice post" }
  ]
};

console.log(post.author.name);
console.log(post.author.username);
console.log(post.comments[0].text);
console.log(post.comments.length);

post.comments.push({ id: 3, user: "@yael", text: "Great!" });

// קריאת קוד: Noa, @lior


// תרגיל 14
const products = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
  { id: 2, name: "Phone", price: 699, category: "Electronics", inStock: false },
  { id: 3, name: "Shoes", price: 120, category: "Fashion", inStock: true },
  { id: 4, name: "Backpack", price: 80, category: "Fashion", inStock: true }
];

for (const p of products) {
  console.log(p.id, p.name, p.price);
}

function countAvailableProducts(products) {
  let count = 0;
  for (const p of products) {
    if (p.inStock) {
      count++;
    }
  }
  return count;
}
console.log(countAvailableProducts(products));

function getProductNameById(products, id) {
  for (const p of products) {
    if (p.id === id) {
      return p.name;
    }
  }
  return "Product not found";
}

console.log(getProductNameById(products, 3));
console.log(getProductNameById(products, 99));
// חשיבה: id הוא ייחודי, ויכולים להיות כמה מוצרים עם אותו שם
