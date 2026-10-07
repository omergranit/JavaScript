
// === תרגיל 1 ===
// א
const myName = "Dana";
const age = 18;
const isStudent = true;

// ב
const introduction = `My name is ${myName}, I am ${age} years old, student: ${isStudent}`;

// ג
console.log(introduction);
console.log(typeof myName);
console.log(typeof age);
console.log(typeof isStudent);

// ד
// typeof course יחזיר string
// typeof completedExercises יחזיר undefined
// typeof isReady יחזיר boolean

// ה
let completedCount = 0;
completedCount = 1;
console.log(completedCount);
// הסבר: משתמשים ב-let כי צריך לשנות את הערך של המשתנה בהמשך הקוד.


// === תרגיל 2 ===
const priceText = "120";
const quantityText = "3";
const orderNumber = 5021;

// א
const numberPrice = Number(priceText);
const numberQuantity = Number(quantityText);
const totalPrice = numberPrice * numberQuantity;
console.log(totalPrice);

// ב
const orderIdText = String(orderNumber);

// ג
console.log(typeof priceText, typeof numberPrice);
console.log(typeof orderNumber, typeof orderIdText);

// ד
// הבעיה הייתה שהמשתנים היו מחרוזות אז המחשב חיבר אותם ברצף במקום לחשב. תיקון:
const price = Number("120");
const quantity = 3;
const total = price * quantity;
console.log(total);

// ה
console.log(Number("8") + 2); // 10
console.log(String(8) + 2);   // "82"


// === תרגיל 3 ===
const my_age = 17;
const has_Permission = true;
const is_Registration_Open = true;
const participant_Id = 24;

// א
if (my_age >= 18 || (has_Permission && is_Registration_Open)) {
  console.log("eligible");
} else {
  console.log("not eligible");
}

// ב
if (participant_Id % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

// ג
if (is_Registration_Open === true && participant_Id === 24) {
  console.log("registered");
}

// ד
if (!is_Registration_Open) {
  console.log("closed");
} else if (!(my_age >= 18 || (has_Permission && is_Registration_Open))) {
  console.log("waiting for approval");
} else {
  console.log("registered");
}


// === תרגיל 4 ===
// א
const completed = true;
const status = completed ? "Done" : "In progress";

// ב
const stock = 5;
const stockMessage = stock > 0 ? "In stock" : "Out of stock";

// ג
// הפלט שיידפס הוא: Premium

// ד
// ternary מתאים כשרוצים לכתוב תנאי פשוט וקצר בשורה אחת.
// if/else מתאים כשרוצים לעשות כמה פעולות או שיש תנאי מורכב יותר.