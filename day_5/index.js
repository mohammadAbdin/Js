// 1-

const destination = {
  name: "Paris",
  country: "France",
  yearVisited: 2019,
  activities: [
    "Visit Louvre Museum",
    "Cruise along the Seine River",
    "Explore Montmartre",
  ],
  ratings: [4, 5, 4, 4, 5],
  getAverageRatings: () => {
    let sum = 0;
    for (let i = 0; i < destination.ratings.length; i++) {
      sum += destination.ratings[i];
    }
    return sum / destination.ratings.length;
  },
};

console.log(destination.getAverageRatings());

// 2-

destination.landMarks = [
  { name: "Eiffel Tower", description: "Iconic iron lattice tower" },
  {
    name: "Louvre Museum",
    description: "World's largest art museum and a historic monument",
  },
];

console.log(destination.activities[1]);
console.log(destination["activities"][1]);

console.log(destination.landMarks[1]);
console.log(destination["landMarks"][1]);

// 3-
destination.yearVisited = 2002;

console.log(destination.yearVisited);

destination.ratings.push(0.5);

console.log(destination.ratings);

delete destination.country;

console.log(destination);

destination.landMarks[0].description = "hii";
destination["landMarks"][0]["description"] = "hii thereeee";

console.log(destination.landMarks);

if (destination.hasOwnProperty("ratings")) {
  console.log("htere is a ratings");
}

// 4-

const destinations = [
  {
    name: "Eiffel Tower",
    details: {
      visitorsPerYear: 7000000,
      entryFee: "25 USD",
    },
  },
  {
    name: "Great Wall of China",
    details: {
      visitorsPerYear: 10000000,
      entryFee: "60 CNY",
    },
  },
];

console.log(destinations[0].details.visitorsPerYear);

let sum = 0;
const averageNumberVisitors = (number) => {
  sum += number;
};
for (let i = 0; i < destinations.length; i++) {
  averageNumberVisitors(destinations[i].details.visitorsPerYear);
}

console.log(sum / destinations.length);

// 5-
const mergedObject = { ...destination, destinations };
console.log(mergedObject);

// Object.freeze(destination);

// Object.seal(destination);

// 6-

const destinationDetails = {
  name: "Machu Picchu",
  country: "Preu",
  yearVisited: 2019,
  ratings: [9, 8.5, 9, 9.5],
};
console.log([
  Object.keys(destinationDetails),
  Object.values(destinationDetails),
]);

// 7-

const destinationRatings = {
  "Macchu Picchu": 9,
  "Great Wall Of China": 8.5,
  "Eiffel Tower": 7.5,
  Colossuem: 6.5,
};
function increaseRating(destinationRatings) {
  const entries = Object.entries(destinationRatings);
  console.log(entries);
  for (const [destination, rating] of entries) {
    if (rating < 7) {
      destinationRatings[destination] = rating + 1;
    }
  }
}

increaseRating(destinationRatings);

console.log(destinationRatings);

// 8-

const destinations1 = {
  1: { name: "Machu Picchu", yearVisited: 2019, rating: 9 },
  2: { name: "Stonehenge", yearVisited: 2010, rating: 8.5 },
  3: { name: "Great Wall of China", yearVisited: 2018, rating: 8.6 },
};

function visiteAfter2015(destinations1) {
  const entries = Object.entries(destinations1);

  let arr = [];
  for (let i = 0; i < entries.length; i++) {
    if (entries[i][1].yearVisited > 2015) {
      entries[i][1].isNewer = true;
      arr.push(entries[i]);
    }
  }
  return arr;
}

console.log(visiteAfter2015(destinations1));

// 9-

const activityRatings = {
  hiking: [9, 8, 10, 7, 8.5],
  sightseeing: [8.5, 8, 9, 9.5, 7.5],
  snorkeling: [7, 7.5, 8, 8.5, 9],
};

const averageActivity = (arr) => {
  const entries = Object.entries(arr);
  const newArr = entries;
  for (let i = 0; i < entries.length; i++) {
    let sum = 0;
    for (let j = 0; j < entries[i][1].length; j++) {
      sum += entries[i][1][j];
    }
    newArr[i][1] = sum / entries[i][1].length;
  }
  console.log(newArr);
};
averageActivity(activityRatings);

// 10-

const destinationAwards = {
  "Machu Picchu": "Most Visited",
  "Great Wall of China": "Most Visited",
  "Eiffel Tower": "Most Photographed",
  Colosseum: "Most Iconic",
};

const entries = Object.entries(destinationAwards);
function traverseObj(arr) {
  let newTraverse = {};
  for (const [destination, rating] of entries) {
    if (newTraverse.hasOwnProperty(`${rating}`)) {
      newTraverse[`${rating}`].push(destination);
    } else newTraverse[`${rating}`] = [destination];
  }
  console.log(newTraverse);
}

traverseObj(entries);
