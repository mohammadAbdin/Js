// 1-
const currentDate = new Date();
console.log(currentDate); //    2024-04-14T16:21:49.025Z

// 2-
const year = currentDate.getFullYear();
console.log(year); //   2024

// 3-

const month = currentDate.getMonth() + 1;

console.log(month); //  4

// 4-

const day = currentDate.getDate();

console.log(day); //    14

// 5-

const dayOfWeek = currentDate.getDay();
console.log(dayOfWeek); //  0  => Monday

// 6-

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

// Print the current time
console.log(`Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`); //    Hours: 19, Minutes: 27, Seconds: 28

// 7-

const daysInMonth = new Date(year, month, 0).getDate();

console.log(`There is ${daysInMonth} days in this month.`);

// 8-

const tomorrow = new Date(currentDate);
tomorrow.setDate(currentDate.getDate() + 1);
const tomorrowYear = tomorrow.getFullYear();
const tomorrowMonth = tomorrow.getMonth() + 1;
const tomorrowDay = tomorrow.getDate();

console.log(
  `Tomorrow's date is ${tomorrowYear}-${tomorrowMonth}-${tomorrowDay}`
);

// 9-
const totalMinutes = 90;

const equivalent = Math.floor(totalMinutes / 60);

console.log(
  `${totalMinutes} minutes is equivalent to: ${equivalent} hour(s) and ${
    totalMinutes % 60
  } minuts(s)`
);
