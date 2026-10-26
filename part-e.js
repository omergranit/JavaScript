// תרגיל 22
const movieObj = {
  id: 41,
  title: "Orbit",
  genre: "Sci-Fi",
  rating: 8.4
};

const { title, genre, rating } = movieObj;
console.log(`Movie: ${title} | ${genre} | ${rating}`);

const recommendedMovies = ["Orbit", "Ocean", "Skyline"];
const [firstMovie, secondMovie] = recommendedMovies;
console.log(firstMovie, secondMovie);
// החיזוי שלי: Orbit Ocean


// תרגיל 23
const user = {
  id: 7,
  name: "Dana Levi",
  email: "dana@example.com",
  isActive: true
};

const formatUser = ({ name, email }) => `${name} - ${email}`;
console.log(formatUser(user));

const getUserStatus = ({ name, isActive }) => {
  return `${name} - ${isActive ? "active" : "inactive"}`;
};
console.log(getUserStatus(user));

// ד - לא, כי הפונקציה לוקחת רק name ו-email


// תרגיל 24
const player = {
  id: 1,
  nickname: "Noni",
  score: 1200,
  level: 8
};

const comments = [
  { id: 1, user: "Noa", text: "Great game!", likes: 12 },
  { id: 2, user: "Dan", text: "Well played", likes: 7 }
];

const newComment = {
  id: 3,
  user: "Maya",
  text: "Amazing score!",
  likes: 0
};

const updatedPlayer = { ...player, score: 1350 };
console.log(player);
console.log(updatedPlayer);

const commentsAfterAdd = [...comments, newComment];
console.log(comments);
console.log(commentsAfterAdd);

// ד - sameReference מצביע על אותו אובייקט, אז שינוי בו ישנה גם את player.
// copiedPlayer הוא עותק חדש, אז שינוי בו לא ישנה את player


// תרגיל 25
const tasks2 = [
  { id: 1, title: "Write tests", completed: false, priority: "high" },
  { id: 2, title: "Update profile", completed: true, priority: "low" },
  { id: 3, title: "Fix login", completed: false, priority: "high" }
];

const removeTaskById = (tasks, id) => {
  return tasks.filter(task => task.id !== id);
};

const tasksAfterDelete = removeTaskById(tasks2, 2);
console.log(tasks2);
console.log(tasksAfterDelete);

// ה - תחזיר מערך חדש עם כל המשימות, כי אף משימה לא נמחקה
