// 1-

const movieRating = 4;

if (movieRating > 7) console.log("Highly rated movie");
else console.log("This movie has room for improvement");

// 2-

const movieBudget = 2000;
if (100000000 > movieBudget && movieBudget > 1000000)
  console.log("Big-budget movie");
else console.log("Indie movie");

// 3-

const movieGenre = "Horror";
const audieceAge = 19;

if (movieGenre == "Horror" && audieceAge < 18)
  console.log("Not suitable for the audience");
else console.log("Suitable for the audience");

// 4-

const fisrtMovieDuration = 90;
const secondMovieDuration = 90;

if (fisrtMovieDuration == secondMovieDuration)
  console.log("Movies have the same duration");
else if (fisrtMovieDuration > secondMovieDuration)
  console.log("The first movie is longer");
else console.log("The second movie is longer");

// 5-

const viewerAge = 19;

if (viewerAge > 13 && viewerAge < 18) console.log("Suitable for teens");
else if (viewerAge > 18) console.log("Suitable for adults");
else console.log("Suitable for kids");

// 6-

const popularScore = 80;
if (popularScore >= 80) console.log("Popular movie");
else console.log("Less known movie");

// 7-

const numOfAwards = 15;

if (numOfAwards % 2 == 0) console.log("Even number of awards");
else console.log("Odd number of awards");

// 8-

const actorAge = 22;

if (actorAge < 14) console.log("Child actor");
else if (actorAge < 24) console.log("Young actor");
else console.log("Adult actor");

// 9-

const hasInvitation = true;

if (hasInvitation) console.log("Welcome to the premiere");
else console.log("Please check your invitation");

// 10-

const screeningDuration = 20;
if (screeningDuration < 40) console.log("Short film");
else if (screeningDuration < 120) console.log("Feature film");
else console.log("Epic length movie");

// 11-

const dayOfWeek = "Sunday";
if (dayOfWeek == "Saturday" || dayOfWeek == "Sunday")
  console.log("Special screening event!");
else console.log("Regular movie showtimes");

// 12-

const releaseYear = 2020;

if (releaseYear > 2000) console.log("21st centuty movie");
else console.log("20th century movie");

// 13-

const movieGenre1 = "Action";
const movieRating1 = 8;

if (movieGenre1 == "Action" && movieRating1 > 7) console.log("Must watch");
else console.log("Check before watching");

// 14-

const ticketPrice = 2;
if (ticketPrice > 10) console.log("Regualr ticket price");
else console.log("Discounted price");

// 15-

const viewerAge1 = 22;
const isAdult = true;
if (isAdult && viewerAge1 > 18) console.log("Allowd to watch");
else console.log("Age-restricted content");

// 16-

const movieTitle = "Spider-man 2";

if (movieTitle.includes("part") || movieTitle.includes("2"))
  console.log("This movie is a sequel");
else console.log("This movie is not sequel");
