// 1-

const distenitationObject = [
  { name: "Paris", distance: 500, speed: 50 },
  { name: "London", distance: 200, speed: 70 },
  { name: "New York", distance: 3000, speed: 500 },
];

function totalTime(arr) {
  for (i = 0; arr.length > i; i++) {
    sum += arr[i].distance / arr[i].speed;
  }
  return sum;
}

let sum = 0;
sum = totalTime(distenitationObject);
console.log(sum);

// 2-

const routesObject = [
  {
    name: "Paris",
    routes: [
      { name: "Route 1", distance: 300 },
      {
        name: "Route 2",
        distance: 250,
      },
    ],
  },
  {
    name: "London",
    routes: [
      {
        name: "Route 1",
        distance: 200,
      },
      { name: "Route 2", distance: 280 },
    ],
  },
];

let max;

function longesRoute(arr) {
  let maximumCheck = arr[0].routes[0].distance;

  for (i = 0; arr.length > i; i++) {
    for (let j = 0; arr[i].routes.length > j; j++) {
      if (maximumCheck < arr[i].routes[j].distance)
        maximumCheck = arr[i].routes[j].distance;
    }
  }
  return maximumCheck;
}
max = longesRoute(routesObject);
console.log(max);

// 3-

const routes = [
  { name: "London", routes: [{ distance: 200 }, { distance: 280 }] },
  { name: "Paris", routes: [{ distance: 300 }, { distance: 250 }] },
  { name: "berlin", routes: [{ distance: 290 }, { distance: 250 }] },
  { name: "Man", routes: [{ distance: 310 }, { distance: 260 }] },
];
function descending(arr) {
  let newArr = arr;
  let temp;
  let currentSum;
  for (i = 0; newArr.length - 1 > i; i++) {
    for (k = i + 1; newArr.length > k; k++) {
      currentSum = 0;
      prevSum = 0;
      for (let j = 0; newArr[i].routes.length > j; j++) {
        prevSum += newArr[i].routes[j].distance;
      }
      for (let j = 0; newArr[k].routes.length > j; j++) {
        currentSum += newArr[k].routes[j].distance;

        if (currentSum > prevSum) {
          temp = newArr[i];
          newArr[i] = newArr[k];
          newArr[k] = temp;
        }
      }
    }
  }

  return newArr;
}
const descendingArr = descending(routes);
console.log(descendingArr);

// 4-

const connections = [
  { name: "Paris", connections: ["London"] },
  { name: "London", connections: ["New York"] },
  { name: "New York", connections: [] },
];
let path = [];
let start = connections[0].name;
path = connectionsFunction(connections);
function connectionsFunction(arr) {
  let path = [];
  path.push(start);
  let connect;
  for (let i = 0; i < arr.length - 1; ) {
    connect = arr[i].connections[0];
    i = arr.findIndex((item) => item.name === connect);
    path.push(connect);
  }
  return path;
}
console.log("start: " + start + "\n output:");
console.log(path);

// 5-

const destinationObject = [
  { name: "Paris", connections: ["London", "New York"] },
  { name: "London", connections: ["New York"] },
  { name: "New York", connections: [] },
];

const output = leastConnections(destinationObject);

function leastConnections(arr) {
  let min = arr[0].connections.length;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i].connections.length) {
      min = arr[i].connections.length;
      index = i;
    }
  }
  return `${arr[index].name} hase the minimum connections of ${min}`;
}
console.log(output);
