// 1-
class Trip {
  #destination;
  #duration;
  #distance;
  #activities;
  constructor(destination, duration, distance, activities) {
    this.#destination = destination;
    this.#duration = duration;
    this.#distance = distance;
    this.#activities = activities || [];
  }
  get destination() {
    return this.#destination;
  }
  get duration() {
    return this.#duration;
  }
  get distance() {
    return this.#distance;
  }
  get activities() {
    return this.#activities;
  }
  set destination(des) {
    if (des == "") return console.log("there must be destination");
    else this.#destination = des;
  }
  set duration(dur) {
    if (dur >= 0) this.#duration = dur;
    else return console.log("duration can't be in minus");
  }
  set distance(dis) {
    if (dis >= 0) this.#distance = dis;
    else return console.log("distance can't be in minus");
  }

  addActivity(activity) {
    if (activity == "") return console.log("there must be an activity");
    else this.#activities.push(activity);
  }
  displayDetails() {
    console.log(
      `duration: ${this.duration},distance: ${this.distance}, destination: ${this.destination} ,activities: ${this.activities}`
    );
  }
}

let trip1 = new Trip("paris", 2, 500);
trip1.addActivity("hi there");
trip1.addActivity("hi there");
trip1.addActivity("hi there");
trip1.displayDetails();

// 2-

class AdventureTrip extends Trip {
  #difficultyLevel;
  #gearList;

  constructor(destination, duration, distance, difficultyLevel, gearList) {
    super(destination, duration, distance);
    this.#difficultyLevel = difficultyLevel;
    this.#gearList = gearList || [];
  }

  get difficultyLevel() {
    return this.#difficultyLevel;
  }

  set difficultyLevel(level) {
    if (level == "hard" || level == "moderate" || level == "easy")
      this.#difficultyLevel = level;
    else
      console.log(
        "difficulty Level must be predefined values (easy, moderate, hard)"
      );
  }

  addGear(gear) {
    if (!Array.isArray(gear)) {
      console.log("Gear must be an array.");
    }
    this.#gearList.push(...gear);
  }

  getGearList() {
    return this.#gearList;
  }
  displayDetails() {
    super.displayDetails();
    console.log(`Difficulty Level: ${this.difficultyLevel}`);
    console.log(`Recommended Gear: ${this.getGearList().join(", ")}`);
  }
}

let adventureTrip1 = new AdventureTrip("Mount Everest", 10, 10000, "hard");
adventureTrip1.addActivity("Climbing");
adventureTrip1.addActivity("Hiking");
adventureTrip1.addGear(["Climbing Rope", "Harness", "Crampons"]);
adventureTrip1.displayDetails();

class CulturalTrip extends Trip {
  #language;
  #historicalSites;

  constructor(destination, duration, distance, language, historicalSites) {
    super(destination, duration, distance);
    this.#language = language;
    this.#historicalSites = historicalSites || [];
  }

  get language() {
    return this.#language;
  }

  set language(lang) {
    if (des == "") return console.log("there must be destination");
    else this.#language = lang;
  }

  get historicalSites() {
    return this.#historicalSites;
  }

  set historicalSites(sites) {
    if (
      Array.isArray(sites) &&
      sites.every((site) => typeof site === "string")
    ) {
      this.#historicalSites = sites;
    } else {
      console.log("Historical sites must be an array of strings.");
    }
  }

  displayDetails() {
    super.displayDetails();
    console.log(`Language: ${this.language}`);
    console.log(`Historical Sites: ${this.historicalSites.join(", ")}`);
  }
}

let culturalTrip1 = new CulturalTrip("Rome", 3, 300, "Italian", [
  "Colosseum",
  "Vatican City",
  "Pantheon",
]);
culturalTrip1.addActivity("Visit Trevi Fountain");
culturalTrip1.displayDetails();

// 3-

class Traveler {
  #name;
  #plannedTrips = [];
  constructor(name) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
  set name(nam) {
    if (nam == "") return console.log("there must be name");
    else this.#name = nam;
  }
  addTrip(trip) {
    if (trip instanceof Trip) {
      console.log("Trip added successfully.");
      this.#plannedTrips.push(trip);
    } else console.log("it's not an intance of Trip class");
  }
  planActivity(trip, activity) {
    if (this.#plannedTrips.includes(trip)) {
      trip.addActivity(activity);
    } else console.log("only planned activities");
  }
  displayAllPlanedTrips() {
    this.#plannedTrips.forEach((trip) => {
      //   console.log(trip);
      trip.displayDetails();
    });
  }
}

let Traveler1 = new Traveler("mohammad");
Traveler1.addTrip(adventureTrip1);
Traveler1.addTrip(culturalTrip1);
Traveler1.displayAllPlanedTrips();
console.log(Traveler1);
