// 1. Group Trips by Destination

const groupTrips = (arr) => {
  const obj = {};
  arr.map((trip) => {
    obj[`${trip.destination}`] = trip;
  });
  return obj;
};

console.log(
  groupTrips([
    { id: 1, traveler: "John Doe", destination: "Paris", days: 5, cost: 1200 },
    { id: 2, traveler: "Jane Doe", destination: "Paris", days: 7, cost: 1400 },
    { id: 3, traveler: "John Doe", destination: "London", days: 3, cost: 900 },
  ])
);

// 2. Find Longest Trip

const findLongestTrip = (arr) => {
  let maxDays = arr[0];
  arr.map((trip) => {
    // console.log(maxDays);
    if (trip.days > maxDays.days) maxDays = trip;
  });
  return maxDays;
};

console.log(
  findLongestTrip([
    { id: 1, traveler: "John Doe", destination: "Paris", days: 5, cost: 1200 },
    { id: 2, traveler: "Jane Doe", destination: "Paris", days: 7, cost: 1400 },
    { id: 3, traveler: "John Doe", destination: "London", days: 3, cost: 900 },
  ])
);

// 3. Find Most Expensive Trip

const findMostExpensiveTrip = (arr) => {
  let maxcost = arr[0];
  arr.map((trip) => {
    if (trip.cost > maxcost.cost) maxcost = trip;
  });
  return maxcost;
};

console.log(
  findMostExpensiveTrip([
    { id: 1, traveler: "John Doe", destination: "Paris", days: 5, cost: 1200 },
    { id: 2, traveler: "Jane Doe", destination: "Paris", days: 7, cost: 1400 },
    { id: 3, traveler: "John Doe", destination: "London", days: 3, cost: 900 },
  ])
);

// 4. Count Trips by Traveler

const countTripsByTraveler = (arr) => {
  let obj = {};
  arr.map((trip) => {
    if (obj[trip.traveler]) obj[trip.traveler]++;
    else obj[trip.traveler] = 1;
  });
  return obj;
};

console.log(
  countTripsByTraveler([
    { id: 1, traveler: "John Doe", destination: "Paris", days: 5, cost: 1200 },
    { id: 2, traveler: "Jane Doe", destination: "Paris", days: 7, cost: 1400 },
    { id: 3, traveler: "John Doe", destination: "London", days: 3, cost: 900 },
  ])
);

// 5. Find All Unique Destinations

const findUniqueDestinations = (arr) => {
  const newArr = [];
  arr.map((trip) => {
    if (!newArr.includes(trip.destination)) newArr.push(trip.destination);
  });
  return newArr;
};
console.log(
  findUniqueDestinations([
    { id: 1, traveler: "John Doe", destination: "Paris", days: 5, cost: 1200 },
    { id: 2, traveler: "Jane Doe", destination: "Paris", days: 7, cost: 1400 },
    { id: 3, traveler: "John Doe", destination: "London", days: 3, cost: 900 },
  ])
);
