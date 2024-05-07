// 1-

const destination = {
  name: "paris",
  country: "france",
  ratings: 5,
  continent: "europe",
};
const { name, country, ratings } = destination;
console.log(name);
console.log(country);
console.log(ratings);

// 2-

let topDestinations = ["paris", "tokyo", "newYork", "London"];

const [paris, tokyo, ...rest] = topDestinations;

topDestinations = [tokyo, paris, ...rest];

console.log(topDestinations);

// 3-

let destinationRatings = {
  paris: 5,
  tokyo: 4,
};

const updateRating = (obj, city, newRating) => {
  const updatedRatings = {
    ...obj,
    [city]: newRating,
  };
  return updatedRatings;
};

destinationRatings = updateRating(destinationRatings, "paris", 4);
console.log(destinationRatings);

// 4-

const itinerary1 = ["Visit Louvre", "Eiffel Tower", "Seine River cruise"];
const itinerary2 = ["Visit Louvre", "Eiffel Tower", "Montmartre"];

const newItinerary = [...itinerary1, ...itinerary2].filter(
  (item, index, array) => {
    array.indexOf(item) === index;
  }
);
console.log(newItinerary);

// 5-

const travelerDetails = {
  name: "John",
  accomodations: {
    first: "Hilton paris",
    second: "Mercure Paris center",
    third: "Ibis",
  },
};

const { first, second } = travelerDetails.accomodations;

console.log(first, second);

// 6-
const baseProfile = {
  name: "Jane",
  nationality: "American",
};

const prefrence = {
  food: "Vegeterian",
  interests: ["musuem", "Art"],
};

const traveler = { ...baseProfile, ...prefrence };

console.log(traveler);

// 7-

const travelerDetails1 = {
  name: "Dave",
  nationality: "Canadian",
  interests: ["Hiking", "food", "Photography"],
};

const addingIntrests = (obj, ...newIntersts) => {
  obj.interests = [...obj.interests, ...newIntersts];

  obj.interests = obj.interests.filter((interest, index, array) => {
    return array.indexOf(interest) === index;
  });
};

addingIntrests(travelerDetails1, "football", "football", "basketball");

console.log(travelerDetails1);

// 8-

const travelItinerary = [
  ["Paris", "Lyon"],
  ["Lyon", "Nice"],
  ["Nice", "Paris"],
];

const concatFun = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(...arr[i]);
  }
  arr = newArr.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });
  console.log(arr);
  return arr;
};

concatFun(travelItinerary);

// 9-

const travelers = [
  { name: "Alice", destination: ["Berlin", "Amesterdam"] },
  { name: "Bob", destination: ["Tokyo", "Kyoto"] },
  { name: "Cara", destination: ["New york", "Boston"] },
];

const extractFun = (arr) => {
  let newArr = [];
  arr.map((traveler) => {
    let [first] = traveler.destination;
    newArr.push(first);
  });
  return newArr;
};

console.log(extractFun(travelers));

// 10-

const itineraries = [
  { name: "Explore the alps", difficulty: 7 },
  { name: "Paris in a day", difficulty: 4 },
];

const increaseDiff = (arr, name, diff) => {
  arr.map((itinerary) => {
    if (itinerary.name == name) itinerary.difficulty = diff;
  });
};
increaseDiff(itineraries, "Paris in a day", 6);
console.log(itineraries);
