// 1-

const destination = { name: "Paris", budget: 2000 };
const getDestinationName = (destination) => destination.name;

// 2-
let status = "Visited";

const getTravelStatus = (status) =>
  status === "Visited"
    ? "You have visited this place"
    : status === "Upcoming"
    ? "You are planning to visit this place"
    : "This place is in your wishlist";

// 3-

const destinations = [
  { name: "Paris", budget: 2000 },
  { name: "Tokyo", budget: 3000 },
  { name: "New York", budget: 2500 },
];

const getTotalBudget = (destinations) => {
  let totalBudget = 0;
  for (let i = 0; i < destinations.length; i++) {
    totalBudget += destinations[i].budget;
  }

  return "travel budget is " + totalBudget;
};

console.log(getTotalBudget(destinations));

// 4-

let sortedDestinations = destinations.sort((a, b) => b.budget - a.budget);

console.log(sortedDestinations);

// 5-

const getDestinationNames = (destinations) =>
  destinations.map((destination) => destination.name);

console.log(getDestinationNames(destinations));
