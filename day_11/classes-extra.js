class destination {
  #name;
  #country;
  #description;
  #visitorRating = [];
  constructor(name, country, description) {
    if (name.length > 1 || country.length > 1) {
      this.#name = name;
      this.#country = country;
    } else console.log("name and country must be longer than 1 char");
    if (description.length <= 500) this.#description = description;
    else console.log("description cannot be more than 500 char");
  }
  getName() {
    return this.#name;
  }
  getCountry() {
    return this.#country;
  }
  getDescription() {
    return this.#description;
  }
  get visitorRating() {
    return this.#visitorRating;
  }
  addRating(rating) {
    if (rating > 10 || rating < 1) console.log("rating out of range");
    else {
      this.#visitorRating.push(rating);
    }
  }
  getAverageRatings() {
    let arr = this.#visitorRating;
    let average = 0;
    arr.map((rating) => {
      average += rating;
    });
    return average / arr.length;
  }
  displayDetails() {
    console.log(
      "name: " + this.#name,
      "country: " + this.#country,
      "description: " + this.#description
    );
  }
  static typeOfDestination() {
    return "General Destination";
  }
}
const destination1 = new destination("Paris", "France", "it is very nice");
destination1.addRating(2);
destination1.addRating(8);
destination1.addRating(11);
console.log(destination1.visitorRating);
destination1.displayDetails();
console.log(destination1.getAverageRatings());
console.log(destination.typeOfDestination());

class culturalDestination extends destination {
  #culturalSignificance;
  constructor(name, country, description, culturalSignificance) {
    super(name, country, description);
    if (culturalSignificance !== "")
      this.#culturalSignificance = culturalSignificance;
    else console.log("cultural Significance cannot be empty");
  }
  get culturalSignificance() {
    return this.#culturalSignificance;
  }
  set culturalSignificance(culturalSignificance) {
    if (culturalSignificance !== "")
      this.#culturalSignificance = culturalSignificance;
    else console.log("cultural Significance cannot be empty");
  }
  displayDetails() {
    console.log(
      "name: " + this.getName(),
      "country: " + this.getCountry(),
      "description: " + this.getDescription(),
      "cultural Significance: " + this.#culturalSignificance
    );
  }
  static typeOfDestination() {
    return "Cultural Destination";
  }
}
// const culturalDestination1 = new culturalDestination(
//   "name",
//   "country",
//   "hi",
//   "aaaaa"
// );
// culturalDestination1.displayDetails();
// console.log(culturalDestination1);

class AdventureDestination extends destination {
  #adventureType;
  constructor(name, country, description, adventureType) {
    super(name, country, description);
    if (adventureType !== "") this.#adventureType = adventureType;
    else console.log("Adventure Type cannot be empty");
  }
  get adventureType() {
    return this.#adventureType;
  }
  set adventureType(adventureType) {
    if (adventureType !== "") this.#adventureType = adventureType;
    else console.log("Adventure Type cannot be empty");
  }
  displayDetails() {
    console.log(
      "name: " + this.getName(),
      "country: " + this.getCountry(),
      "description: " + this.getDescription(),
      "adventure Type: " + this.#adventureType
    );
    return;
  }
  static typeOfDestination() {
    return "Adventure Destination";
  }
}

class travelAgency {
  #destinations = [];
  constructor() {}
  addDestination(des) {
    console.log();
    if (des instanceof destination) {
      this.#destinations.push(des);
      console.log("Destination added successfully.");
    } else
      console.log(
        "Invalid destination object. Please provide an instance of the destination class."
      );
  }
  findDestinationByName(name) {
    let arr = this.#destinations;
    console.log(arr);
    const des = arr.find((des) => des.getName() == name);
    return des.displayDetails();
  }
  overAllAverageRating() {
    let arr = this.#destinations;
    let average = 0;
    let i = 0;
    arr.map((des) => {
      des.visitorRating.map((rating) => {
        console.log(rating);
        average += rating;
        i++;
      });
    });
    console.log(average / i);
    return;
  }
}

// const destination1 = new destination("Paris", "France", "It is very nice");
destination1.addRating(2);
destination1.addRating(8);
destination1.addRating(11);

const culturalDestination1 = new culturalDestination(
  "Rome",
  "Italy",
  "Beautiful city",
  "Historic"
);
culturalDestination1.addRating(5);
culturalDestination1.addRating(7);
culturalDestination1.addRating(9);

const adventureDestination1 = new AdventureDestination(
  "Queenstown",
  "New Zealand",
  "Adventure capital",
  "Extreme Sports"
);
adventureDestination1.addRating(8);
adventureDestination1.addRating(9);
adventureDestination1.addRating(10);

const agency = new travelAgency();
agency.addDestination(destination1);
agency.addDestination(culturalDestination1);
agency.addDestination(adventureDestination1);

console.log(agency.findDestinationByName("Queenstown"));

console.log(agency.overAllAverageRating());
