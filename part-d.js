// תרגיל 15
const players = [
  { id: 1, nickname: "Pixel", score: 840, level: 5 },
  { id: 2, nickname: "Nova", score: 1200, level: 8 },
  { id: 3, nickname: "Blaze", score: 460, level: 3 }
];

players.forEach(player => {
  console.log(`Player: ${player.nickname} - ${player.score} points`);
});

players.forEach(player => {
  console.log(`${player.id}. ${player.nickname} - ${player.score} points, level ${player.level}`);
});

// ג - result יהיה undefined כי forEach לא מחזיר כלום


// תרגיל 16
const scores = [840, 1200, 460, 950];
const courses = ["JavaScript", "Design", "Databases"];

const updatedScores = scores.map(score => score + 100);
const courseNameLengths = courses.map(course => course.length);

console.log(scores);
console.log(updatedScores);
console.log(courses);
console.log(courseNameLengths);
// ג - בכל תוצאה יש אותו מספר איברים כמו במקור (4 ו-3)

// ד - היה חסר return
const doubledScores = scores.map(score => {
  return score * 2;
});
console.log(doubledScores);


// תרגיל 17
const posts = [
  { id: 101, username: "noa_dev", content: "First project!", likes: 45 },
  { id: 102, username: "dan_codes", content: "New feature", likes: 180 },
  { id: 103, username: "maya_js", content: "Weekend update", likes: 72 }
];

const postUsernames = posts.map(post => post.username);

const postLabels = posts.map(post => `${post.username} | ${post.content} | ${post.likes} likes`);

const postCards = posts.map(post => {
  return { id: post.id, label: `${post.username} - ${post.likes} likes` };
});

console.log(postUsernames);
console.log(postLabels);
console.log(posts);
console.log(postCards);
// ד - posts לא השתנה
// חשיבה: יש בו גם id וגם טקסט מוכן להצגה, אז אפשר לזהות כל פוסט ולהציג אותו


// תרגיל 18
const tasks = [
  { id: 1, title: "Write tests", completed: false, priority: "high" },
  { id: 2, title: "Update profile", completed: true, priority: "low" },
  { id: 3, title: "Fix login", completed: false, priority: "high" },
  { id: 4, title: "Review text", completed: false, priority: "medium" }
];

const openTasks = tasks.filter(task => !task.completed);
const highPriorityTasks = tasks.filter(task => task.priority === "high");
const urgentOpenTasks = tasks.filter(task => task.priority === "high" && !task.completed);

const getTasksByPriority = (tasks, priority) => {
  return tasks.filter(task => task.priority === priority);
};

console.log(openTasks);
console.log(highPriorityTasks);
console.log(urgentOpenTasks);
console.log(getTasksByPriority(tasks, "medium"));

// ה - result יהיה array עם איבר אחד


// תרגיל 19
const movies = [
  { id: 11, title: "Skyline", genre: "Drama", rating: 8.2 },
  { id: 12, title: "Orbit", genre: "Sci-Fi", rating: 7.9 },
  { id: 13, title: "Ocean", genre: "Adventure", rating: 8.5 }
];

const findMovieById = (movies, id) => {
  return movies.find(movie => movie.id === id);
};

const movie1 = findMovieById(movies, 11);
if (movie1) {
  console.log(movie1.title);
} else {
  console.log("Movie not found");
}

const movie2 = findMovieById(movies, 99);
if (movie2) {
  console.log(movie2.title);
} else {
  console.log("Movie not found");
}

// ג - find במקום filter
const movie = movies.find(movie => movie.id === 12);
console.log(movie.title);

// ד
// find מחזיר: את האיבר הראשון שמתאים, או undefined
// filter מחזיר: מערך חדש עם כל האיברים שמתאימים


// תרגיל 20
// א - forEach, כי רק מדפיסים
players.forEach(player => console.log(player.nickname, player.score));

// ב - map, כי רוצים מערך חדש מכל פוסט
const usernames = posts.map(post => post.username);
console.log(usernames);

// ג - filter, כי רוצים רק חלק מהמשימות
const notCompleted = tasks.filter(task => !task.completed);
console.log(notCompleted);

// ד - find, כי רוצים סרט אחד
const movie11 = movies.find(movie => movie.id === 11);
console.log(movie11);

// ה - filter ואז map
const goodMovies = movies.filter(movie => movie.rating > 8).map(movie => movie.title);
console.log(goodMovies);

// ו - find
const post101 = posts.find(post => post.id === 101);
console.log(post101);

// סיכום:
// מבצע פעולה על כולם: forEach
// יוצר תוצאה חדשה מכל אחד: map
// שומר רק חלק: filter
// מחזיר אחד: find


// תרגיל 21
const topPlayers = players.filter(player => player.score > 800).map(player => player.nickname);
console.log(topPlayers);

const popularUsers = posts.filter(post => post.likes > 100).map(post => post.username);
console.log(popularUsers);

const getOpenTaskTitles = (tasks) => {
  return tasks.filter(task => !task.completed).map(task => task.title);
};
console.log(getOpenTaskTitles(tasks));

// ד
// אחרי הפעולה הראשונה: מערך של אובייקטים של Pixel ו-Nova
// אחרי הפעולה השנייה: מערך של מחרוזות ["Pixel", "Nova"]

// ה - אחרי map נשארים רק שמות, ואין כבר score לסנן לפיו
