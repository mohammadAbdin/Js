// 1-
const processTravelPlans = (arr, callback) => {
  if (!Array.isArray(arr)) return "'Expected anarray of travel plans";
  for (let i = 0; i < arr.length; i++)
    if (
      !arr[i].hasOwnProperty("id") ||
      !arr[i].hasOwnProperty("city") ||
      !arr[i].hasOwnProperty("activities")
    ) {
      return `Travel plan with ID ${arr[i].id} is not in the right structure`;
    }
  const newTravelPlans = JSON.parse(JSON.stringify(arr));
  newTravelPlans.forEach((travelPlan) => {
    callback(travelPlan);
  });
  return newTravelPlans;
};
const travelPlans = [
  {
    id: 1,
    city: "Tokyo",
    activities: [{ name: "Tokyo square", duration: 2 }],
  },
  {
    id: 2,
    city: "Paris",
    activities: [{ name: "Eiffel Tower", duration: 4 }],
  },
];
const callbackFunction = (travelPlan) => {
  console.log(`do something to ${travelPlan}`);
};
console.log(processTravelPlans(travelPlans, callbackFunction));

// 2-

const processActivities = (arr, callback) => {
  if (!Array.isArray(arr)) return "'Expected an array of activities ";
  for (let i = 0; i < arr.length; i++)
    if (
      !arr[i].hasOwnProperty("id") ||
      !arr[i].hasOwnProperty("name") ||
      !arr[i].hasOwnProperty("type") ||
      !arr[i].hasOwnProperty("duration")
    ) {
      return `activity with ID ${arr[i].id} is not in the right structure`;
    }
  const newActivities = JSON.parse(JSON.stringify(arr));
  newActivities.forEach((activity) => {
    callback(activity);
  });
  return newActivities;
};

const activities = [
  {
    id: 1,
    name: "Activity name",
    type: "Activity type",
    duration: 2,
  },
  {
    id: 2,
    name: "Eiffel tower",
    type: "journey",
    duration: 4,
  },
];
console.log(processActivities(activities, callbackFunction));

// 3-
const processPlan = (travelPlan, callback) => {
  if (
    !travelPlan.hasOwnProperty("id") ||
    !travelPlan.hasOwnProperty("city") ||
    !travelPlan.hasOwnProperty("activities")
  ) {
    return ` Expected properties: id, city, and activities.`;
  }

  const newTravelPlan = JSON.parse(JSON.stringify(travelPlan));

  callback(newTravelPlan);

  return newTravelPlan;
};

const travelPlan = {
  id: 1,
  city: "Tokyo",
  activities: [{ name: "Tokyo square", duration: 2 }],
};

const callbackFunction1 = (plan) => {
  console.log(plan);
};

console.log(processPlan(travelPlan, callbackFunction1));
