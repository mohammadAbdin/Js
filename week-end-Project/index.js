// ================================================
// Ex1.1 - Yes or No
const boolean = true;

if (boolean) console.log("Yes");
else console.log("No");

// ================================================
// Ex2.1 - Sum of lowest numbers

const sumOfTwoLowestNumbers = (arr) => {
  arr.sort((a, b) => a - b);

  return arr[0] + arr[1];
};

console.log(sumOfTwoLowestNumbers([19, 5, 42, 2, 77]));

// ================================================
// Ex2.2 - One and Zero - Binary
const binaryArray = [0, 0, 1, 1, 0, 1, 1, 1];
let decimal = 0;
let i = binaryArray.length - 1;
binaryArray.map((number) => {
  decimal += number * 2 ** i;
  i--;
});
console.log(decimal);

// ================================================
// Ex2.3 - Find the Next Perfect Square
const square = 625;
function getNextPerfectSquare(number) {
  if (Math.sqrt(number) % 1 == 0) return (Math.sqrt(number) + 1) ** 2;
  else return -1;
}
console.log(getNextPerfectSquare(square));
// ================================================
// Ex2.4 - Unique

function findUniq(arr) {
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (found) {
      if (arr[i] == arr[i + 1]) return arr[i - 1];
      return arr[i];
    }
    if (arr[i] != arr[i + 1]) found = true;
  }
}

console.log(findUniq([0, 0, 0, 5, 0]));
// ================================================
// Ex2.5 - Summation
function Summation(number) {
  if (number == 1) return 1;

  return number + Summation(number - 1);
}
console.log(Summation(8));

// ================================================
// Ex2.6 - Years and Centuries
function yearsAndCenturies(year) {
  const century = Math.floor((year - 1) / 100) + 1;
  return century;
}
console.log(yearsAndCenturies(2001));

// ================================================
// Ex2.7 - Basic Math

function basicMath(string, number1, number2) {
  switch (string) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    default:
      return null;
  }
}
console.log(basicMath("-", 2, 10));

// ================================================
// Ex3.1 - Growth Of population
function nb_year(p0, percent, aug, p) {
  let n = 0;
  console.log(p0);
  while (p0 < p) {
    p0 += aug + (p0 * percent) / 100;

    n++;
  }
  return n;
}
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));
// ================================================
// Ex3.2 - People on the Bus
const bus = [
  [2, 0],
  [5, 1],
  [8, 6],
  [4, 6],
  [8, 2],
];

function sleepingInTheBus(arr) {
  let input = 0;
  let output = 0;
  arr.map((smallArr) => {
    input += smallArr[0];
    output += smallArr[1];
  });
  return input - output;
}
console.log(sleepingInTheBus(bus));

// ================================================
// Ex4.1 - Fibonacci -

function fibonacci(number) {
  if (number <= 1 || number == 0) return number;
  return fibonacci(number - 1) + fibonacci(number - 2);
}
console.log(fibonacci(8));

// ================================================
// Ex4.2 - Tribonacci -

// my starting is 0,0,1
function tribonacci(number) {
  if (number <= 1) {
    return 0;
  } else if (number === 2) {
    return 1;
  } else {
    return (
      tribonacci(number - 1) + tribonacci(number - 2) + tribonacci(number - 3)
    );
  }
}

console.log(tribonacci(8));
// ================================================
// Ex5.1 - trimming string
function trimmingString(string) {
  return string.substring(1, string.length - 1);
}
console.log(trimmingString("hhil"));

// ================================================
// Ex5.2 - String Repeat

const repeat_str = (repeat, string) => {
  let newString = "";
  for (; repeat > 0; repeat--) newString += string;
  return newString;
};

console.log(repeat_str(6, "hii"));

// ================================================
// Ex5.3 - To Camel Case

const toCamelCase = (str) => {
  const words = str.split("-");

  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  return words.join("");
};

console.log(toCamelCase("the-stealth-warrior"));

// ================================================
// Ex5.4 - To Weird Case
const toWeirdCase = (string) => {
  let newStr = "";
  let i = 0;
  while (i < string.length) {
    if (i % 2 == 0) {
      newStr += string[i].toUpperCase();
    } else newStr += string[i];
    // console.log();
    i++;
  }
  return newStr;
};
console.log(toWeirdCase("String"));
toWeirdCase("Weird string case"); //=> returns "WeIrD StRiNg CaSe"

// ================================================
// Ex5.5 - Abbreviate two words

const abbreviate = (str) => {
  newStr = str[0] + ".";
  while (i < str.length) {
    i++;
    if (str[i] == " ") break;
  }
  newStr += str[i + 1];
  return newStr;
};

console.log(abbreviate("Sam Harris"));

// ================================================
// Ex5.6 - Mask

const maskify = (str) => {
  k = str.length - 4;
  substring = str.substring(k, str.length);
  for (let i = 0; i < k; i++) substring = "#" + substring;
  return substring;
};

console.log(maskify("4556364607935616"));
console.log(maskify("Skippy"));

// ================================================
// Ex5.7 - shortest words

const shortestWords = (str) => {
  let min = Infinity;
  let wordsLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " " || i == str.length - 1) {
      if (i == str.length - 1) wordsLength++;
      if (min > wordsLength) min = wordsLength;

      wordsLength = 0;
    } else wordsLength++;
  }
  return min;
};

console.log(
  shortestWords("sksndksnkdnkslsklsnshhh sksbfff kll dkdnvedfrd lpfrM")
);
// ================================================
// Ex5.8 - shortest words version 2

const longestWords = (str) => {
  let max = 0;
  let wordsLength = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " " || i == str.length - 1) {
      if (i == str.length - 1) wordsLength++;
      if (max < wordsLength) max = wordsLength;

      wordsLength = 0;
    } else wordsLength++;
  }
  return max;
};

console.log(longestWords("a a a klsssl lpfrM"));

// ================================================
// Ex6.1- Mumbling

const accum = (string) => {
  let i = 1;
  let newStr = "";
  for (let k = 0; k < string.length; k++) {
    let alphabet = string[k];
    if (/^[a-zA-Z]+$/.test(alphabet)) {
      newStr += alphabet.toUpperCase();
      for (let j = 1; j < i; j++) {
        newStr += alphabet.toLowerCase();
      }
      i++;
      newStr += "-";
    }
  }
  newStr = newStr.substring(0, newStr.length - 1);
  return newStr;
};

console.log(accum("RqaEz!ty"));

// ================================================
// Ex6.2- Counting Duplicates

const countingDuplicates = (string) => {
  const obj = {};
  for (let alphabet of string) {
    if (obj.hasOwnProperty(alphabet.toLowerCase()))
      obj[alphabet.toLowerCase()]++;
    else obj[alphabet.toLowerCase()] = 1;
  }
  for (const key in obj) {
    if (obj[key] <= 1) {
      delete obj[key];
    }
  }
  return obj;
};

console.log(countingDuplicates("aabBcde"));

// ================================================
// Ex6.3- organize strings
a = "abcdefghijklimnopqrstuvwxyz";
b = "xxxxyyyyabklmopq";
const longest = (str1, str2) => {
  let newStr = str1 + str2;
  newStr = newStr.split("").sort();
  for (let i = newStr.length; i > 0; i--) {
    if (newStr[i - 1] == newStr[i]) {
      newStr.splice(i - 1, 1);
    }
  }
  return newStr.join("");
};

console.log(longest(a, a));

// ================================================
// Ex6.4- isogram

const islsogram = (string) => {
  const obj = {};
  for (let alphabet of string) {
    if (obj.hasOwnProperty(alphabet.toLowerCase()))
      obj[alphabet.toLowerCase()]++;
    else obj[alphabet.toLowerCase()] = 1;
  }
  for (const key in obj) {
    if (obj[key] > 1) {
      return false;
    }
  }
  return true;
};

console.log(islsogram("Dermatoglyphics"));
// ================================================
// Ex7- Implement The Following JS Methods

const filter = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3)
      //our filter condition
      newArr.push(arr[i]);
  }
  return newArr;
};

console.log(
  [1, 2, 3, 4, 5, 6, 7].filter((number) => {
    return number > 3;
  })
);

const map = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
  }
  return arr;
};
console.log(
  [1, 2, 3, 4, 5, 6, 7].map((number) => {
    return ++number;
  })
);

const foreach = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
};
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.forEach((element, index) => {
  arr[index] = element * 2;
});
console.log(arr);

console.log(filter([1, 2, 3, 4, 5, 6, 7]));
console.log(map([1, 2, 3, 4, 5, 6, 7]));
console.log(foreach([1, 2, 3, 4, 5, 6, 7]));
// ================================================
// Ex 8- Find the Perimeter of a Rectangle

const findPerimeter = (length, width) => {
  return (length + width) * 2;
};

console.log(findPerimeter(2, 9));

// ================================================
