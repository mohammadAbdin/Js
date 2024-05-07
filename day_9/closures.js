// 1-
const createTravelPlanner = () => {
  let destinations = [];

  return {
    addDestination: (destination) => {
      destinations.push(destination);
    },

    removeDestination: (destination) => {
      const index = destinations.indexOf(destination);
      if (index !== -1) {
        destinations.splice(index, 1);
        console.log(`${destination} is removed`);
      } else {
        console.log(`${destination} doesnt exist in the travel planner`);
      }
    },

    getDestinations: () => {
      return destinations;
    },
  };
};

const planner = createTravelPlanner();
planner.addDestination("Paris");
planner.addDestination("Tokyo");
planner.addDestination("London");
console.log(planner.getDestinations());
planner.removeDestination("Tokyo");
console.log(planner.getDestinations());
planner.removeDestination("Rome");

// 2-
const createTravelPlannerWithDetails = () => {
  let travelPlannerArr = [];
  return {
    addDestinationWithDetails: (destination, destinationDetails) => {
      let Obj = {};
      Obj[`${destination}`] = destinationDetails;
      travelPlannerArr.push(Obj);
      console.log(`${destination} Added`);
      console.log(travelPlannerArr);
    },
    removeDestination: (destination) => {
      for (let i = 0; i < travelPlannerArr.length; i++) {
        if (travelPlannerArr[i].hasOwnProperty(destination)) {
          travelPlannerArr.splice(i, 1);
          console.log(`${destination} is deleted`);
          return null;
        }
      }
      console.log(`${destination} is not exist`);
      return null;
    },
    getDestinationsWithDetails: () => {
      return travelPlannerArr;
    },
  };
};
const travelPlanner = createTravelPlannerWithDetails();
travelPlanner.addDestinationWithDetails("jerusalem", { isNice: "it is nice" });
travelPlanner.addDestinationWithDetails("haifa", { isNice: "it is not nice" });
travelPlanner.addDestinationWithDetails("ramAllah", { isNice: "it is nice" });
travelPlanner.removeDestination("ramAllah");
travelPlanner.removeDestination("raaamAllah");
console.log(travelPlanner.getDestinationsWithDetails());

const createSortableTravelPlanner = () => {
  let travelPlannerArr = [];

  return {
    addDestinationWithDetails: (destination, destinationDetails) => {
      let Obj = {};
      Obj[`${destination}`] = destinationDetails;
      travelPlannerArr.push(Obj);
      console.log(`${destination} Added`);
      console.log(travelPlannerArr);
    },
    removeDestination: (destination) => {
      for (let i = 0; i < travelPlannerArr.length; i++) {
        if (travelPlannerArr[i].hasOwnProperty(destination)) {
          travelPlannerArr.splice(i, 1);
          console.log(`${destination} is deleted`);
          return null;
        }
      }
      console.log(`${destination} is not exist`);
      return null;
    },
    getDestinationsWithDetails: () => {
      return travelPlannerArr;
    },
    sortDestinations: () => {
      const compareKeys = (a, b) => {
        const keyA = Object.keys(a)[0]; // Get the key of object a
        const keyB = Object.keys(b)[0]; // Get the key of object b
        return keyA.localeCompare(keyB); // Compare keys alphabetically
      };
      travelPlannerArr = travelPlannerArr.slice().sort(compareKeys);
      console.log(travelPlannerArr);
    },
    searchDestination: (destination) => {
      for (let i = 0; i < travelPlannerArr.length; i++) {
        if (travelPlannerArr[i].hasOwnProperty(destination)) {
          return travelPlannerArr[i];
        }
      }
      return `${destination} is not exist`;
    },
  };
};

const travelPlanner1 = createSortableTravelPlanner();
travelPlanner1.addDestinationWithDetails("jerusalem", { isNice: "it is nice" });
travelPlanner1.addDestinationWithDetails("haifa", { isNice: "it is not nice" });
travelPlanner1.addDestinationWithDetails("haifa", { isNice: "it is not nice" });
travelPlanner1.addDestinationWithDetails("aifa", { isNice: "it is not nice" });
travelPlanner1.addDestinationWithDetails("ramAllah", { isNice: "it is nice" });
travelPlanner1.removeDestination("ramAllah");
travelPlanner1.removeDestination("raaamAllah");
console.log(travelPlanner1.getDestinationsWithDetails());
travelPlanner1.sortDestinations();
console.log(travelPlanner1.searchDestination("jerusalemm"));
console.log(travelPlanner1.searchDestination("jerusalem"));
