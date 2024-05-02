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

// 1. Retrieve Destinations

const destinationCities = (obj) => {
  const arr = [];
  for (let i = 0; i < obj.destinations.length; i++) {
    arr.push(obj.destinations[i]);
  }
  return arr;
};

console.log(destinationCities(travelData));

// 2. Filter Flights by Destination
const filteringFlights = (arr, city) => {
  return arr.filter((flight) => flight.destination === city);
};

console.log(
  filteringFlights(
    [
      { destination: "New York" },
      { destination: "London" },
      { destination: "Paris" },
    ],
    "London"
  )
);

// 3. Calculate Total Flight Duration

const totalFlightDuration = (arr) => {
  let duration = 0;
  for (let i = 0; i < arr.length; i++) {
    duration += getFlightDurationInSeconds(arr[i].duration);
    console.log(duration);
  }
  return duration;
};

const getFlightDurationInSeconds = (duration) => {
  const [hours, minutes] = duration.split("h ");
  return parseInt(hours) * 3600 + parseInt(minutes) * 60;
};
console.log(
  totalFlightDuration([
    { duration: "3h 30m" },
    { duration: "2h 45m" },
    { duration: "1h 15m" },
  ])
);

// 4. Combine Flight Numbers and Destinations

const combineFlightNumberAndDestination = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(`${arr[i].flightNumber} - ${arr[i].destination}`);
  }
  return newArr;
};

console.log(
  combineFlightNumberAndDestination([
    { flightNumber: "FL001", destination: "New York" },
    {
      flightNumber: "FL002",
      destination: "London",
    },
  ])
);
// 5. Update Flight Duration

const updateFlightDuration = (arr, newDuration, theFlightNumber) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].flightNumber == theFlightNumber) {
      arr[i].duration = newDuration;
    }
  }
  return arr;
};

console.log(
  updateFlightDuration(
    [
      { flightNumber: "FL001", duration: "3h 30m" },
      { flightNumber: "FL002", duration: "2h 45m" },
    ],
    (newDuration = "4h 15m"),
    (flightNumber = "FL001")
  )
);

// 6. Filter Flights by Duration

const filteringFlightsByDuration = (arr, minDuration) => {
  return arr.filter((flight) => flight.duration >= minDuration);
};

console.log(
  filteringFlightsByDuration(
    [{ duration: "3h 30m" }, { duration: "2h 45m" }, { duration: "1h 15m" }],
    (minDuration = 180)
  )
);

// 7. Retrieve Flight Numbers

const retrieveFlightNumbers = (arr) => {
  const newArr = [];
  arr.map((flight) => {
    newArr.push(flight.flightNumber);
  });
  return newArr;
};

console.log(
  retrieveFlightNumbers([
    { flightNumber: "FL001" },
    { flightNumber: "FL002" },
    { flightNumber: "FL003" },
  ])
);

// 8. Sort Flights by Duration
const sortingFlightsByDurations = (arr) => {
  arr.sort((a, b) => {
    const durationA = getFlightDurationInSeconds(a.duration);
    const durationB = getFlightDurationInSeconds(b.duration);

    return durationA - durationB;
  });

  return arr;
};

console.log(
  sortingFlightsByDurations([
    { duration: "2h 45m" },
    { duration: "3h 30m" },
    { duration: "1h 15m" },
  ])
);

// 9. Retrieve Flight Destinations
const retrieveFlights = (arr) => {
  const Arr = [];
  for (let i = 0; i < arr.length; i++) {
    Arr.push(arr[i].destination);
  }
  return Arr;
};

console.log(
  retrieveFlights([
    { destination: "New York" },
    { destination: "London" },
    {
      destination: "Paris",
    },
  ])
);
