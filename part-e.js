// const movie = {
// id: 41,
// title: "Orbit",
// genre: "Sci-Fi",
// rating: 8.4
// };
// //תרגיל 22
// // סעיף א
// const { title, genre, rating } = movie;
// // סעיף ב
// console.log(`${title} | ${genre} | ${rating}`)
// // סעיף ג
// // החיזוי שלי- Orbit Ocean
// const recommendedMovies = ["Orbit", "Ocean", "Skyline"];
// const [firstMovie, secondMovie] = recommendedMovies;
// console.log(firstMovie, secondMovie);
//תרגיל 23
// סעיף א
// const user = {
//   id: 7,
//   name: "Dana Levi",
//   email: "dana@example.com",
//   isActive: true
// };
// const formatUser = ({name, email}) => {return `${name} - ${email}`};
// // סעיף ב
// const message1 = formatUser(user);
// console.log(message1);
// // סעיף ג
// const getUserStatus = ({name, isActive}) => {return `${name} , ${isActive}`};
// const message2 = getUserStatus(user);
// console.log(message2);
// // סעיף ד
// // לא
// תרגיל 24 
// const player = {
//   id: 1,
//   nickname: "Noni",
//   score: 1200,
//   level: 8
// };

// const comments = [
//   { id: 1, user: "Noa", text: "Great game!", likes: 12 },
//   { id: 2, user: "Dan", text: "Well played", likes: 7 }
// ];

// const newComment = {
//   id: 3,
//   user: "Maya",
//   text: "Amazing score!",
//   likes: 0
// };
// // סעיף א 
// const updatedPlayer = {...player, score:1350};
// // סעיף ב
// const commentsAfterAdd = [...comments, newComment];
// // סעיף ג
// console.log(player);
// console.log(updatedPlayer);
// console.log(comments);
// console.log(commentsAfterAdd);
// //סעיף ד
// // בראשון- אם נשנה את player הוא ישתנה, ובשני לא.
//תרגיל 25
const tasks = [
  { id: 1, title: "Write tests", completed: false, priority: "high" },
  { id: 2, title: "Update profile", completed: true, priority: "low" },
  { id: 3, title: "Fix login", completed: false, priority: "high" }
];

// סעיף א
const removeTaskById = (tasks, id) =>
  tasks.filter(task => task.id !== id);

// סעיף ב
const tasksAfterDelete = removeTaskById(tasks, 2);

// סעיף ג
console.log(tasks);            // 3 איברים - המקור לא השתנה
console.log(tasksAfterDelete); // 2 איברים - בלי המשימה שה-id שלה 2