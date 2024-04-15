// 1-

const dayOfWeek = 1;
switch (dayOfWeek) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  case 4:
    console.log("Wednesday");
    break;

  case 5:
    console.log("Thursday");
    break;

  case 6:
    console.log("Friday");
    break;

  case 7:
    console.log("Saturday");
    break;
}

// 2-

const themeColor = "light";

switch (themeColor) {
  case "dark":
    console.log("Theme color is dark");
    break;

  case "night":
    console.log("Theme color is night");
    break;

  case "light":
    console.log("Theme color is light");
    break;
}

// 3-

const notificationStatus = "new";

switch (notificationStatus) {
  case "new":
    console.log("notification status is new");
    break;

  case "unread":
    console.log("notification status is unread");
    break;

  case "unopened":
    console.log("notification status is unopened");
    break;
}

// 4-

const movieRating = "R";

switch (movieRating) {
  case "G":
    console.log("Movie rating is G");
    break;

  case "PG":
    console.log("Movie rating is PG");
    break;

  case "PG-13":
    console.log("Movie rating is PG-13");
    break;

  case "R":
    console.log("Movie rating is R");
    break;

  case "NC-17":
    console.log("Movie rating is NC-17");
    break;
}

// 5-

const audieceScore = 99;

switch (true) {
  case audieceScore > 90:
    console.log("Must watch");
    break;

  case audieceScore >= 75:
    console.log("Recommended");
    break;

  case audieceScore >= 60:
    console.log("Mixed Reviews");
    break;

  case audieceScore < 60:
    console.log("Skip it");
    break;
}

// 6-

const userInput = "dss";

switch (typeof userInput) {
  case "number":
    console.log("the variable is number");
    break;
  case "string":
    console.log("the variable is String");
    break;
  case "boolean":
    console.log("the variable is Boolean");
    break;
}

// 7-

const releaseMonth = 8;
console.log(releaseMonth / 4);
switch (Math.floor(releaseMonth / 4)) {
  case 1:
    console.log("Q1");
    break;
  case 2:
    console.log("Q2");
    break;
  case 3:
    console.log("Q3");
    break;
  case 4:
    console.log("Q4");
    break;
}
