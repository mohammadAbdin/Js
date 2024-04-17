// 1-

const travelItinerary = ["Paris", "Tokyo", "New York"];

const destinationToCheck = travelItinerary[1];
console.log(destinationToCheck);

// 2-

const travelDates = ["2023-07-01", "2023-07-15", "2023-08-01"];

const reverseArray = travelDates.reverse();

console.log(reverseArray);

// 3-

const travelActivities = ["Sightseeing", "Hiking", "Dining"];

const activitiesString = travelActivities.join(", ");

console.log(activitiesString);

// 4-

const plannedActivities = ["Sightseeing", "Hiking", "Dining"];

const activityToCheck = "Hiking";

console.log(plannedActivities.includes(activityToCheck));

// 5-

const destinationList = ["Paris", "Tokyo", "New York City"];
const specificDestination = "New York City";
if (destinationList.indexOf(specificDestination) != -1)
  console.log(
    specificDestination +
      " found at index " +
      destinationList.indexOf(specificDestination)
  );

//   6-
const upcomingTrips = ["Greece", "Iceland", "Japan"];

upcomingTrips.pop();
console.log(upcomingTrips);

// 7-

const buketListDestinations = ["Machu Picchu", "Great Wall of China"];
const newDestinantion = "Aurora Australis in Antartica";
buketListDestinations.splice(0, 0, newDestinantion);
console.log(buketListDestinations);

// 8-

const europeanCapitals = ["Paris", "Berlin", "Madrid"];

const firstCapital = europeanCapitals.splice(0, 1);

console.log(firstCapital);
console.log(europeanCapitals);

// 9-

const beachDestination = ["Maldives", "Bora Bora"];

const cityDestinations = ["New York", "Tokyo"];

const newArray = beachDestination.concat(cityDestinations);

console.log(newArray);

// 10-

const destinationList1 = ["Paris", "Tokyo", "New York City"];
destinationList1.sort();
console.log(destinationList1);

// 11-

const packingListString = "Passaport,Sunscreen,Camera";

const packingListArray = packingListString.split(",");

console.log(packingListArray);

// 12-

const tripItinerary = ["Visit Louvre", "Eiffel Tower", "Seine River Cruise"];
const n = 2;
const newTripItinerary = tripItinerary.splice(0, n);
console.log(newTripItinerary);

// 13-

const travelWishlist = [
  "Northen Lights in Norway",
  "Safari in Kenya",
  "Great Barrier Reef",
];

travelWishlist.length = 0;

console.log(travelWishlist);

// 14-

const destination = ["Paris", "Tokyo"];

const newDestinantion1 = "New York City";

destination.push(newDestinantion1);

console.log(destination);

// 15-

const destinations = ["Paris", "Tokyo", "New York City"];

destinations.pop();

console.log(destinations);

// 16-

const destinations1 = ["Paris", "Tokyo", "New York City"];

const newDestinantions = destinations1.join(",");

console.log(newDestinantions);

// 17-

const destinations2 = ["Paris", "Tokyo", "New York City"];

const destinationToFind = "Tokyo";

console.log(destinations2.indexOf(destinationToFind));

// 18-

const destinations3 = ["Paris", "Tokyo", "New York City"];

destinations3.sort();

console.log(destinations3);

// 19-

const distances = [500, 150, 300, 200];

distances.sort();

console.log(distances);
