// 1-
const TravelPlanner = { locations: [] };

// 2-

TravelPlanner.addLocation = (city, obj) => {
  for (let i = 0; i < TravelPlanner.locations.length; i++) {
    if (TravelPlanner.locations[i].name == city) {
      return "errorrrrrrr";
    }
  }
  obj.name = city;
  TravelPlanner.locations.push(obj);
  return TravelPlanner;
};

console.log(
  TravelPlanner.addLocation("Paris", {
    description: "City of lights and love",
    bestTimeToVisit: "Spring",
    localCuisine: "French cuisine",
  })
);
TravelPlanner.addLocation("Tokyo", {
  description: "Vibrant metropolis with rich culture",
  bestTimeToVisit: "Spring or Autumn",
  localCuisine: "Japanese cuisine",
});
TravelPlanner.addLocation("Rome", {
  description: "Historic city with ancient ruins and art",
  bestTimeToVisit: "Spring or Autumn",
  localCuisine: "Italian cuisine",
});

TravelPlanner.addLocation("Albania", {
  description: "City that never sleeps with diverse culture",
  bestTimeToVisit: "Fall",
  localCuisine: "American cuisine",
});

console.log(TravelPlanner);

TravelPlanner.deleteLocation = (city) => {
  TravelPlanner.locations.forEach((location, index) => {
    if (location.name === city) {
      TravelPlanner.locations.splice(index, 1);
    }
  });
};

// TravelPlanner.deleteLocation("Tokyo");
console.log(TravelPlanner);

// 4-

TravelPlanner.findLocation = (city) => {
  let obj = null;
  TravelPlanner.locations.forEach((location, index) => {
    if (location.name == city) {
      obj = TravelPlanner.locations[index];
    }
  });
  return obj;
};

console.log(TravelPlanner.findLocation("Paris"));

// 5-

TravelPlanner.locations.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});
console.log(TravelPlanner);

TravelPlanner.editLocation = (city, obj) => {
  for (let i = 0; i < TravelPlanner.locations.length; i++) {
    if (TravelPlanner.locations[i].name == city) {
      obj.name = city;

      TravelPlanner.locations[i] = obj;

      return TravelPlanner;
    }
  }

  return TravelPlanner;
};

console.log(
  TravelPlanner.editLocation("Paris", {
    description: "",
    bestTimeToVisit: "",
    localCuisine: " cuisine",
  })
);

// 7-

TravelPlanner.showAll = () => {
  for (let i = 0; i < TravelPlanner.locations.length; i++) {
    console.log(TravelPlanner.locations[i]);
  }
};

TravelPlanner.showAll();

// 8-

TravelPlanner.filterLocations = (searchString) => {
  const searchStringLower = searchString.toLowerCase();

  return TravelPlanner.locations.filter((location) => {
    const descriptionLower = location.description.toLowerCase();
    return descriptionLower.includes(searchStringLower);
  });
};
console.log("----------------------------------------------");
console.log(TravelPlanner.filterLocations("cu"));

// 9-

TravelPlanner.rateLocation = (city, rating) => {
  if (rating <= 5 && rating >= 1) {
    TravelPlanner.locations.forEach((location, index) => {
      if (location.name == city) {
        if (location.hasOwnProperty("ratings")) {
        } else location["ratings"] = [];

        location.ratings.push(rating);
      }
    });
  }
};

TravelPlanner.rateLocation("Paris", 3);
TravelPlanner.rateLocation("Paris", 4);
TravelPlanner.rateLocation("Tokyo", 3);
TravelPlanner.rateLocation("Tokyo", 4);
TravelPlanner.rateLocation("Paris", 10);
TravelPlanner.rateLocation("Paris", -1);

console.log(TravelPlanner.locations);
TravelPlanner.getAverageRating = (city) => {
  for (const location of TravelPlanner.locations) {
    if (location.name === city && location.hasOwnProperty("ratings")) {
      let sum = location.ratings.reduce((acc, rating) => acc + rating, 0);
      return sum / location.ratings.length;
    }
  }
  return null;
};

const sumRating = TravelPlanner.getAverageRating("Paris");
const sumRating1 = TravelPlanner.getAverageRating("ll");

console.log(sumRating);
console.log(sumRating1);

// 10-

TravelPlanner.getAverageRating = () => {
  let maxAverage = 0;
  let maxAverageIndex = [];
  TravelPlanner.locations.forEach((location, index) => {
    let average = 0;
    if (location.hasOwnProperty("ratings")) {
      console.log(location.name);
      location.ratings.forEach((rating) => {
        average += rating;
      });
      average = average / location.ratings.length;
      if (average == maxAverage) maxAverageIndex.push(location.name);
      if (average > maxAverage) {
        maxAverage = average;
        maxAverageIndex = [];
        maxAverageIndex.push(location.name);

        console.log(
          "9+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
        );
        console.log(maxAverage);
      }
    }
  });
  return maxAverageIndex;
};

console.log(TravelPlanner.getAverageRating());
