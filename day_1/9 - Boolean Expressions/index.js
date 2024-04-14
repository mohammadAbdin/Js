// 1-

const isSunny = true;
const isWeekend = false;

console.log("is sunny: " + isSunny + ", is weekend : " + isWeekend);

// 2-

const age = 20;

const license = true;

if (license && age > 18) console.log("he has a license and he is over 18");
else console.log("he has not a license or he is not over 18");

// 3-

const knowsJavaScript = false;
const knowsPython = true;

if (knowsJavaScript || knowsPython) console.log("he knows Python or JS");
else console.log("he doesnt know neither Python nor JS");

// 4-

const isRaining = true;

if (isRaining) console.log("is raining : " + isRaining);

// 5-
const likeMusic = true;
const playsGuitar = false;
const hasTime = true;

if (likeMusic && (playsGuitar || hasTime))
  console.log("he likes music and either plays guitar or has time to learn it");

//   6-

const personAge = 25;
if (personAge > 18)
  console.log("he is " + personAge + " he is greater than 18");

//   7-

currentTemperature = 30;

if (currentTemperature < 20 || currentTemperature > 30)
  console.log("The current tempreture is less than 20 or more than 30");

//   8-

const firstNumber = 10;

const secondNumber = "10";

if (firstNumber == secondNumber) console.log("they are equall with ==");
if (firstNumber === secondNumber) console.log("they are equall with ===");

// 9-

const budget = 500;

const expense = 450;

if (budget > expense) console.log("expense less than budget");
else console.log("budget less than expense");

// 10-

const person1Height = 165;
const person2Height = 170;

if (person1Height > person2Height) console.log("The first person is greater");
else if (person1Height < person2Height)
  console.log("The second person is greater");
else console.log("they are equall");
