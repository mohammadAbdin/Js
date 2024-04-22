// 1- &&

// 2-

function AddDestinations(destinantionName, travelDate) {
  let destination = {
    destinantionName: destinantionName,
    travelDate: travelDate,
  };

  return destination;
}

let travelDestinantions = [];

travelDestinantions.push(AddDestinations("London", "21/4"));
travelDestinantions.push(AddDestinations("Istanbul", "13/1"));
travelDestinantions.push(AddDestinations("New York", "12/3"));
travelDestinantions.push(AddDestinations("Jerusalem", "12/12"));

console.log(travelDestinantions);

// 3-
findTravelDate("Lndon");
function findTravelDate(city) {
  let isThere = false;
  travelDestinantions.map((dest) => {
    if (dest.destinantionName == city) {
      console.log(`${city} travel date is in ${dest.travelDate}`);
      isThere = true;
    }
  });
  if (!isThere) {
    console.log("Destination was not found");
  }
}

// 4-
updateTravelDate("Istanbul", "13.2");
function updateTravelDate(destinantionName, newTravelDate) {
  let isThere = false;
  travelDestinantions.map((dest) => {
    if (dest.destinantionName == destinantionName) {
      dest.travelDate = newTravelDate;
      isThere = true;
    }
  });
  if (!isThere) {
    console.log("Destination does not exist");
  }
}
console.log(travelDestinantions);

// 5-
// removeTravelDestination("London");

function removeTravelDestination(city) {
  for (let i = 0; travelDestinantions.length > i; i++) {
    if (travelDestinantions[i].destinantionName == city) {
      console.log("delete");
      travelDestinantions.splice(i, 1);
    }
    console.log(travelDestinantions[i].destinantionName);
    console.log(city);
  }
}
console.log(travelDestinantions);

// 6-
listDestinantions();

function listDestinantions() {
  for (let i = 0; i < travelDestinantions.length; i++) {
    console.log(
      travelDestinantions[i].destinantionName +
        "-" +
        travelDestinantions[i].travelDate
    );
  }
}

// 7-

function findNextDestination(currentDestinantionDate) {}

// Pure functions

// 1-
const avrArray = [8.5, 7.9, 6.3, 9.2, 8.1];
console.log(calculateAverageRating(avrArray));

function calculateAverageRating(inputArray) {
  let sum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    sum += inputArray[i];
  }
  return sum / inputArray.length;
}

// 2-
const organizerName = [
  "Europe Exploration (2020) - Organized by Wanderlust Travel",
  "Asian Adventure (2019) - Organized by Globe Trotters",
  "Caribbean Cruise (2022) - Organized by Cruise Experts",
];

extractOrganizerName(organizerName);

function extractOrganizerName(inputArray) {
  for (let i = 0; i < inputArray.length; i++) {
    const index = inputArray[i].indexOf("Organized by");
    inputArray[i] = inputArray[i].substring(index + " Organized by".length);
  }
  console.log(inputArray);
}

// 3-

containsWordInTitle(
  "Europe Exploration (2020) - Organized by Wanderlust Travel",
  "Europe"
);
function containsWordInTitle(word, keyWord) {
  console.log(word.includes(keyWord));
}

// 4-
const allTitles = ["Paris gatway", "Prarie Expedention", "Portogal Experience"];
console.log(allTitlesStartWithSameLetter(allTitles));
// allTitlesStartWithSameLetter(allTitles);
function allTitlesStartWithSameLetter(inputArray) {
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i][0] != inputArray[i - 1][0]) {
      return false;
    }
  }
  return true;
}

// 5-

const concatenateTypes = ["City", "Beach", "Mountain", "Cruise"];

const output = concatenateTypes.join(", ");

console.log(output);
// 6-
const adventureArray = [
  "Exploring Asia",
  "African Safari",
  "European Adventure",
];
console.log(anyTitleFifteenCharachter(adventureArray));

function anyTitleFifteenCharachter(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 15) {
      return true;
    }
  }
}

// 7-

function findTripsByOrganizer(tripsTitle, Organizer) {}

// 8-

const captilized = ["exploring asia", "european adventure", "caribbean criuse"];

console.log(captilizeFirstLetter(captilized));

function captilizeFirstLetter(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
  }
  return newArr;
}

// Bonus:

// 1-

function partition(arr, low, high) {
  let pivot = arr[high];

  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function sortDestinationRatings(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);

    sortDestinationRatings(arr, low, pi - 1);
    sortDestinationRatings(arr, pi + 1, high);
  }
  return arr;
}

let arr = [4, 2, 5, 3, 1];
let N = arr.length;

const newArr = sortDestinationRatings(arr, 0, N - 1);
console.log(newArr);

// 2-

const destinationRating = [[2, 3, 5, 4, 1], 3];

averageRatingOfTopN(destinationRating[0], destinationRating[1]);

function averageRatingOfTopN(arr, N) {
  let maxArr = [];
  while (maxArr.length != N) {
    let max = arr[0];
    if (maxArr.includes(arr[0])) max = arr[1];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= max && !maxArr.includes(arr[i])) {
        max = arr[i];
      }
    }
    maxArr.push(max);
  }

  let avr = 0;
  for (let i = 0; N > i; i++) avr += maxArr[i];
  console.log(avr / N);
}

// 3-

const ratingsArray = [3, 4, 3, 5, 4, 5, 5];

console.log(destinationRatingFrequency(ratingsArray));
function destinationRatingFrequency(arr) {
  let frequencyArray = [];
  let calculatedElements = [];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!calculatedElements.includes(arr[i])) {
      let counter = 0;
      for (let j = i; j < arr.length; j++) {
        if (arr[j] == arr[i]) counter++;
      }
      frequencyArray.push(counter);
      calculatedElements.push(arr[i]);
    }
  }
  for (let i = 0; i < calculatedElements.length; i++)
    newArr.push([calculatedElements[i], frequencyArray[i]]);
  return newArr;
}

// 4-
const toNormalizedScaleArray = [[1, 2, 3, 4, 5], 0, 100];

console.log(normalizeDestinationRatings(toNormalizedScaleArray));

function normalizeDestinationRatings(arr) {
  let newArr = [];
  let wieght = (arr[2] - arr[1]) / (arr[0].length - 1);
  for (let i = 0; i < arr[0].length; i++) newArr.push((arr[0][i] - 1) * wieght);
  return newArr;
}
