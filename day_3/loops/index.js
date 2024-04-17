// 1-

const activityDurations = [2, 3, 1];
let sum = 0;
for (i = 0; i < activityDurations.length; i++) {
  sum += activityDurations[i];
}
console.log(sum);

// 2-

let max = activityDurations[0];
for (i = 0; i < activityDurations.length; i++) {
  if (max < activityDurations[i]) max = activityDurations[i];
}
console.log(max);

// 3-

const activityNames = ["Sightseeing", "Hiking", "Sightseeing"];
let mostFreqIndex = 0;
let mostFrequency = 0;
for (let i = 0; i < activityNames.length; i++) {
  let ActivityName = activityNames[i];
  let frequency = 0;
  for (let j = 0; j < activityNames.length; j++) {
    if (ActivityName == activityNames[j]) {
      frequency++;
      if (frequency > mostFrequency) {
        mostFrequency = frequency;
        mostFreqIndex = j;
      }
    }
  }
}
console.log(activityNames[mostFreqIndex]);
console.log(mostFrequency);

// 4-

let min = activityDurations[0];
for (i = 0; i < activityDurations.length; i++) {
  if (min > activityDurations[i]) min = activityDurations[i];
}
console.log(min);

// 5-

const transportationTypes = ["Car", "Train", "Car", "Flight"];
const counterArr = [];
let base = "";
for (i = 0; i < transportationTypes.length; i++) {
  let counter = 0;
  base = transportationTypes[i];
  for (j = 0; j < transportationTypes.length; j++) {
    if (transportationTypes[j] == base) {
      counter++;
    }
  }

  if (!counterArr.includes(`${transportationTypes[i]} count is : ${counter}`))
    counterArr.push(`${transportationTypes[i]} count is ${counter}`);
}
console.log(counterArr.join(" ,  "));

// 6-
const travelExpenses = [50, 100, 75, 125, 200];
let avr = 0;
for (i = 0; i < travelExpenses.length; i++) {
  avr += travelExpenses[i];
}
avr = avr / travelExpenses.length;

console.log(avr);

// 7-

let maximum = travelExpenses[0];
for (i = 0; i < travelExpenses.length; i++) {
  if (maximum < travelExpenses[i]) maximum = travelExpenses[i];
}
console.log(maximum);

// 8-

let budget = 0;
for (i = 0; i < travelExpenses.length; i++) {
  if (travelExpenses[i] < 150) budget++;
}
console.log(budget);

// Bounes
// 9-

const categoryExpenses = [
  [100, 200],
  [150, 175],
  [120, 250],
];

const expensesArr = [];

for (let i = 0; categoryExpenses.length > i; i++) {
  let total = 0;
  for (let j = 0; j < categoryExpenses[i].length; j++) {
    total += categoryExpenses[i][j];
  }
  expensesArr.push(total);
}
console.log(expensesArr);

// 10-

const routeDistances = [
  [120, 200],
  [150, 175],
  [100, 250],
];
let minimumRoute = 99999999;
let minIndex = 0;
for (let i = 0; routeDistances.length > i; i++) {
  let route = 0;
  for (let j = 0; j < routeDistances[i].length; j++) {
    route += routeDistances[i][j];
  }

  if (minimumRoute > route) {
    minimumRoute = route;
    minIndex = i;
  }
}
console.log(`index : ${minIndex} route: ${minimumRoute}`);

// 11-

const activityDurationMatrix = [
  [2, 3],
  [1, 4],
  [3, 2],
];

const activityDurationMatrixAverage = [];

for (let i = 0; activityDurationMatrix.length > i; i++) {
  let total = 0;
  for (let j = 0; j < activityDurationMatrix[i].length; j++) {
    total += activityDurationMatrix[i][j];
  }
  total = total / activityDurationMatrix[i].length;
  activityDurationMatrixAverage.push(total);
}
console.log(activityDurationMatrixAverage);

// 12-

const destinationRatingMatrix = [
  [4.5, 4.7],
  [4.8, 4.6],
  [4.9, 5],
];
const maxRatingArr = [];
for (let i = 0; 2 > i; i++) {
  let maxRatingCategory = 0;
  for (let j = 0; 3 > j; j++) {
    if (destinationRatingMatrix[j][i] > maxRatingCategory)
      maxRatingCategory = destinationRatingMatrix[j][i];
  }
  maxRatingArr.push(maxRatingCategory);
}
console.log(maxRatingArr);

// 13-

const regionRecommendationMatrix = [
  [5, 7],
  [8, 6],
  [9, 7],
];
const regionHighlyRecommendation = [];
for (let i = 0; regionRecommendationMatrix.length > i; i++) {
  let highRecomendationLevelInEachRegion = 0;
  for (let j = 0; regionRecommendationMatrix[i].length > j; j++) {
    if (regionRecommendationMatrix[i][j] >= 7)
      highRecomendationLevelInEachRegion++;
  }
  regionHighlyRecommendation.push(highRecomendationLevelInEachRegion);
}
console.log(regionHighlyRecommendation);

// 14-

const mustVisitRatingMatrix = [
  [4.5, 4.7],
  [4.9, 5],
  [4.8, 4.9],
];

const mustVisitRatingMatrixAverage = [];

for (let i = 0; mustVisitRatingMatrix.length > i; i++) {
  let total = 0;
  for (let j = 0; j < mustVisitRatingMatrix[i].length; j++) {
    if (mustVisitRatingMatrix[i][j] > 4.8) total += mustVisitRatingMatrix[i][j];
  }
  total = total;
  mustVisitRatingMatrixAverage.push(total);
}
console.log(mustVisitRatingMatrixAverage);
