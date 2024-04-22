let travelData = {
  destinations: ["Paris", "London", "New York", "Tokyo", "Sydney"],
  flights: [
    { flightNumber: "AA123", destination: "New York", duration: "8h 15m" },
    { flightNumber: "BA456", destination: "London", duration: "7h 30m" },
    { flightNumber: "AF789", destination: "Paris", duration: "9h 20m" },
    { flightNumber: "JL012", destination: "Tokyo", duration: "13h 45m" },
    { flightNumber: "QF345", destination: "Sydney", duration: "22h 35m" },
  ],
};

//   1-

let cityName = ["paris", "london", "new York", "tokyo", "sydney"];

function upperCase(city) {
  firstAlphabet = city[0].toUpperCase();
  city = city.slice(1);
  city = firstAlphabet + city;
  return city;
}

for (let i = 0; cityName.length > i; i++) {
  cityName[i] = upperCase(cityName[i]);
}
console.log(cityName);

// 2-

const citiesInclude = [];

function isInclude(city) {
  let isThere = city.includes("yo") || city.includes("Yo");
  return isThere;
}
for (let i = 0; travelData.destinations.length > i; i++) {
  let boolean = isInclude(travelData.destinations[i]);
  if (boolean) {
    citiesInclude.push(travelData.destinations[i]);
  }
}
console.log(citiesInclude);

// 3-

function swap(flightNumber) {
  const code = flightNumber.substring(0, 2);
  const number = flightNumber.substring(2);
  return number + code;
}

for (let i = 0; i < travelData.flights.length; i++) {
  travelData.flights[i].flightNumber = swap(travelData.flights[i].flightNumber);
}
console.log(travelData.flights);

// 4-

function splittingHoursAndMinutes(time) {
  time = time.replace("h", " hours");
  time = time.replace("m", " minutes");
  return time;
}

for (let i = 0; i < travelData.flights.length; i++) {
  travelData.flights[i].duration = splittingHoursAndMinutes(
    travelData.flights[i].duration
  );
}
// console.log(travelData.flights);

// 5-

function acronym(input) {
  let firstLetters = input[0];
  let i = 0;
  while (i != input.length) {
    if (input[i] == " ") {
      firstLetters += input[i + 1];
    }
    i++;
  }
  return firstLetters;
}

const wordsArray = [
  "Msjdss Dsiosnw Toefer",
  "Lkeib Biubf Qfjiode",
  "Yiorfn Nodhd Miofdh Jdbd Agdddr",
];
const acronymArray = [];

for (let i = 0; i < wordsArray.length; i++) {
  acronymArray.push(acronym(wordsArray[i]));
}

console.log(acronymArray);

// 6-

const URLFriendlyArray = [];

function URLFriendly(input) {
  let url = "";
  let i = 0;
  while (i != input.length) {
    // console.log(input[i]);
    if (input[i] == " ") {
      url += "-";
    } else url += input[i];
    i++;
  }
  return url;
}

for (let i = 0; i < wordsArray.length; i++) {
  URLFriendlyArray.push(URLFriendly(wordsArray[i]));
}
console.log(URLFriendlyArray);

const string = "rani and me";
string.split(" ").join("-");
console.log(string);
// 7-

const trimDetails =
  "Visit the Golden Gate Bridge, take a walk in Golden Gate Park, see Alcatraz Island";

const newSentence = only50Char(trimDetails);

console.log(newSentence);

function only50Char(sentence) {
  let newSentence = "";
  let i = 0;

  while (i != 51) {
    newSentence += sentence[i];
    i++;
  }
  newSentence += "...";
  return newSentence;
}

// 8-

const cities = "Paris, London, New York, Tokyo, Sydney";

const citiesArray = cities.split(", ");

console.log(citiesArray);
