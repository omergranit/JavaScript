// תרגיל 5
function calculateOrderTotal(unitPrice, quantity) {
  return unitPrice * quantity;
}

const orderTotal = calculateOrderTotal(3, 4);
console.log(orderTotal);
console.log(calculateOrderTotal(10, 2));
console.log(calculateOrderTotal(5, 6));

// ד - היה צריך return במקום console.log
const result = calculateOrderTotal(20, 3);
console.log(result);


// תרגיל 6
function getLetterGrade(grade) {
  if (grade < 0 || grade > 100) {
    return "Invalid grade";
  }
  if (grade >= 90) return "A";
  if (grade >= 80) return "B";
  if (grade >= 70) return "C";
  if (grade >= 60) return "D";
  return "F";
}

console.log(getLetterGrade(95));
console.log(getLetterGrade(83));
console.log(getLetterGrade(70));
console.log(getLetterGrade(48));
console.log(getLetterGrade(101));
// החיזוי שלי: A, B, C, F, Invalid grade


// תרגיל 7
const greet = (name) => {
  return `Hello, ${name}`;
};

const calculateArea = (width, height) => {
  return width * height;
};

const greeting = greet("Dana");
const area = calculateArea(4, 5);
console.log(greeting);
console.log(area);

// ג - אפשר את שתיהן
const greetShort = name => `Hello, ${name}`;
const calculateAreaShort = (width, height) => width * height;


// תרגיל 8
const calculateDiscountedPrice = (price, discountPercent) => {
  return price - (price * discountPercent) / 100;
};

const isExpensive = price => price > 500;

const square = number => {
  return number * number;
};

console.log(calculateDiscountedPrice(100, 20));
console.log(calculateDiscountedPrice(250, 10));
console.log(isExpensive(999));
console.log(isExpensive(80));
console.log(square(4));
console.log(square(7));


// תרגיל 9
const product = {
  id: 1,
  name: "Laptop",
  price: 999,
  inStock: true
};

function getProductSummary(product) {
  return `ID: ${product.id} | ${product.name} - ${product.price}`;
}

function getAvailability(product) {
  return product.inStock ? "Available" : "Unavailable";
}

const summary = getProductSummary(product);
const availability = getAvailability(product);
console.log(summary);
console.log(availability);
// ד - ככה הפונקציה עובדת על כל מוצר שנשלח לה ולא רק על משתנה אחד

