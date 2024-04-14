// 1-
const num1 = 8;
const num2 = 15;

console.log(num1 + num2);

// 2-
const a = 30;
const b = 12;

console.log(a - b);

// 3-
const x = 7;
const y = 3;

console.log(y * x);
// 4-
const divided = 20;
const divisor = 4;

console.log(
  `the answer is ${divided / divisor} the remain is ${divided % divisor}`
);

// 5-

const number1 = 15;
const number2 = 25;
const number3 = 10;

const avg = (number1 + number2 + number3) / 3;
console.log(avg);

// 6-

const xy = 300;
console.log(xy % 3);

// 7-

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function oddOrEven(number) {
//   if (number % 2 == 0) return true;
//   else return false;
// }

// readline.question("Enter a number: ", (number) => {
//   const numberAsNumber = Number(number);

//   if (!isNaN(numberAsNumber)) {
//     if (oddOrEven(numberAsNumber))
//       console.log(`the number ${numberAsNumber} is even`);
//     else console.log(`the number ${numberAsNumber} is odd`);
//   } else {
//     console.log(`you did not enter a number`);
//   }
//   readline.close();
// });

// 8-

// function dividedTo5And7(number) {
//   if (number % 5 == 0 && number % 7 == 0) return true;
//   else return false;
// }

// readline.question("Enter a number: ", (number) => {
//   const numberAsNumber = Number(number);

//   if (!isNaN(numberAsNumber)) {
//     if (dividedTo5And7(numberAsNumber))
//       console.log(`the number ${numberAsNumber} is divisible to 5 and 7`);
//     else
//       console.log(`the number ${numberAsNumber} is not divisible to 5 and 7`);
//   } else {
//     console.log(`you did not enter a number`);
//   }
//   readline.close();
// });

// 9-
let i;
for (i = 1; i < 21; i++) if (i % 4 == 0) console.log(i);

// 10-

// function isGreaterThan10AndLessThan20(number) {
//   if (number > 10 && number < 20) return true;
//   else return false;
// }

// readline.question("Enter a number: ", (number) => {
//   const numberAsNumber = Number(number);

//   if (!isNaN(numberAsNumber)) {
//     if (isGreaterThan10AndLessThan20(numberAsNumber))
//       console.log(
//         `the number ${numberAsNumber} is greater than 10 and less than 20`
//       );
//     else
//       console.log(
//         `the number ${numberAsNumber} is not greater than 10 and less than 20`
//       );
//   } else {
//     console.log(`you did not enter a number`);
//   }
//   readline.close();
// });

// 11-

// function isGreaterThan10AndLessThan_5(number) {
//   if (number > 10 || number < -5) return true;
//   else return false;
// }

// readline.question("Enter a number: ", (number) => {
//   const numberAsNumber = Number(number);

//   if (!isNaN(numberAsNumber)) {
//     if (isGreaterThan10AndLessThan_5(numberAsNumber))
//       console.log(
//         `the number ${numberAsNumber} is greater than 10 or less than -5`
//       );
//     else
//       console.log(
//         `the number ${numberAsNumber} is not greater than 10 or less than -5`
//       );
//   } else {
//     console.log(`you did not enter a number`);
//   }
//   readline.close();
// });

// 12-

let booleanValue = true;

console.log(booleanValue);
booleanValue = !booleanValue;
console.log(booleanValue);

// 13-

function isGreaterThan5AndLessThan10OrGreaterThan20AndLessThan30(number) {
  if (number > 5 && (number < 10 || (number > 20 && number < 30))) return true;
  else return false;
}

readline.question("Enter a number: ", (number) => {
  const numberAsNumber = Number(number);

  if (!isNaN(numberAsNumber)) {
    if (isGreaterThan5AndLessThan10OrGreaterThan20AndLessThan30(numberAsNumber))
      console.log(
        `the number ${numberAsNumber} is between 5 and 10 or between 20 nad 30`
      );
    else
      console.log(
        `the number ${numberAsNumber} is not between 5 and 10 or between 20 nad 30`
      );
  } else {
    console.log(`you did not enter a number`);
  }
  readline.close();
});
