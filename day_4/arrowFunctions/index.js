const destinations = [
  { name: "Paris", status: "Visited", budget: 1500 },
  { name: "London", status: "Upcoming", budget: 1800 },
  { name: "Tokyo", status: "Wishlist", budget: 2000 },
  { name: "Sydney", status: "Visited", budget: 1600 },
  { name: "New York", status: "Upcoming", budget: 1700 },
];
// 1-

const getDestinationName = (destination) => destination.name;

console.log(getDestinationName(destinations[0]));
// 2-

const getTravelStatus = (status) => {
  status === "Visited"
    ? "You have visited this place"
    : status === "Upcoming"
    ? "You are planning to visit this place"
    : "This place is in your wishlist";
};
console.log(getTravelStatus(destinations[2].status));

// 3-

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
